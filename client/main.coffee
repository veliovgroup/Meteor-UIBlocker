class UIBlocker
  constructor: ->
    @isBlocked        = false
    @templateInstance = false
    @message          = new ReactiveVar false
    @open             = new ReactiveVar false
  block: (message = false) ->
    @isBlocked = true
    @open.set true
    @message.set message if message
    Blaze.remove @templateInstance if @templateInstance
    if $('body')[0]
      @templateInstance = Blaze.render Template.UIBlock, $('body')[0]
    $('html').addClass 'UIBlocked'
    return
  unblock: ->
    @isBlocked = false
    @open.set false
    @message.set false
    Blaze.remove @templateInstance if @templateInstance
    $('html').removeClass 'UIBlocked'
    return


UIBlock = new UIBlocker

Template.UIBlock.helpers
  blocked: -> UIBlock.open.get()
  message: -> UIBlock.message.get()