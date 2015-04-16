UI blocker and simple loading spinner for Meteor apps
=============
Inspired by [atmospherejs.com](http://atmospherejs.com)

This package simply works after adding into your project, - additional setup isn't required

### Installation
```shell
meteor add ostrio:uiblocker
```

### Usage
__Block screen:__

```coffeescript
UIBlock.block()
UIBlock.block 'some message'
```


__Unblock screen:__

```coffeescript
UIBlock.unblock()
```

__Check if screen is blocked:__
```coffeescript
if UIBlock.isBlocked
  # Do something
```


__`Meteor.status` example:__

```coffeescript
Tracker.autorun ->
  if Meteor.status().connected
    UIBlock.unblock()
  else
    UIBlock.block Meteor.status().status
```


__`Meteor.call` example:__

```coffeescript
UIBlock.block 'Sending email...'
Meteor.call 'sendEmail', subject, body, (err, res) ->
  UIBlock.unblock()
```

### Recommended DOM structure
Recommended to have main block element right after `body` tag, which wraps all website content. ID and Class name doesn't make any sense, in example we will use [tw]bootstrap's `.container` as a wrapper for content.
```jade
html
  head
  //- ...

  body
    .container
      //- All content here
```