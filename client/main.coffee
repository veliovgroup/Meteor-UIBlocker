UIBlockMessage = new ReactiveVar false
UIBlockOpen = new ReactiveVar false
UIBlockTemplateInstance = false

@UIBlock =
  isBlocked: false
  block: (message = false) ->
    @isBlocked = true
    Blaze.remove UIBlockTemplateInstance if UIBlockTemplateInstance
    if $('body')[0]
      UIBlockTemplateInstance = Blaze.render Template.UIBlock, $('body')[0]
    UIBlockOpen.set true
    UIBlockMessage.set message if message
    $('html').addClass 'UIBlocked'
    undefined
  unblock: ->
    @isBlocked = false
    Blaze.remove UIBlockTemplateInstance if UIBlockTemplateInstance
    UIBlockOpen.set false
    UIBlockMessage.set false
    $('html').removeClass 'UIBlocked'
    undefined

Meteor.setTimeout ->
  Template.UIBlock.helpers
    blocked: ->
      UIBlockOpen.get()
    message: ->
      UIBlockMessage.get()
, 10