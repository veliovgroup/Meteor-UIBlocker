UI blocker and simple loading spinner for Meteor apps
=============

![overview](https://raw.githubusercontent.com/VeliovGroup/Meteor-UIBlocker/master/uiblocker.gif)

Inspired by [atmospherejs.com](http://atmospherejs.com)

This package simply works after adding into your project, - additional setup isn't required

### Installation
```shell
meteor add ostrio:uiblocker
```

### Usage
##### Block screen:
```javascript
UIBlock.block();
UIBlock.block('some message'); // <-- Block with message
```

##### Unblock screen:
```javascript
UIBlock.unblock();
```

##### Check if screen is blocked:
```javascript
if (UIBlock.isBlocked) {
  // Do something
}
```

##### `Meteor.status` example:
```javascript
Tracker.autorun(function () {
  if (Meteor.status().connected) {
    UIBlock.unblock();
  } else {
    UIBlock.block(Meteor.status().status);
  }
});
```

##### Change message on the fly:
```javascript
UIBlock.block('Sending email...');
Meteor.setTimeout(function () {
  UIBlock.message.set('Please wait...');
}, 1000);
```

##### `Meteor.call` example:
```javascript
UIBlock.block('Sending email...');
Meteor.call('sendEmail', subject, body, function (err, res) {
  UIBlock.unblock();
});
```

##### Recommended DOM structure
Recommended to have main block element right after `body` tag, which wraps all website content. ID and Class name doesn't make any sense, in example we will use [tw]bootstrap's `.container` as a wrapper for content.
```html
<html>
  <head>
    <!-- ... -->
  </head>
  <body>
    <div class="container">
      <!-- All content here -->
    </div>
  </body>
</html>
```