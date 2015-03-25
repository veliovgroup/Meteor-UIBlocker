UI blocker and simple loading spinner for Meteor apps
=============
Inspired by [atmospherejs.com](atmospherejs.com)

This package simply works after adding into your project, - additional setup isn't required

### Installation
```shell
meteor add ostrio:uiblocker
```

### Usage
Block screen:
```coffeescript
UIBlock.block()
UIBlock.block 'some message'
```

Unblock screen:
```coffeescript
UIBlock.unblock()
```

`Meteor.status` example:
```coffeescript
Tracker.autorun ->
  if Meteor.status().connected
    UIBlock.unblock()
  else
    UIBlock.block Meteor.status().status
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