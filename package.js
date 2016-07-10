Package.describe({
  name: 'ostrio:uiblocker',
  version: '2.0.0',
  summary: 'UI blocker and loading spinner',
  git: 'https://github.com/VeliovGroup/Meteor-UIBlocker',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['fourseven:scss@2.1.1', 'coffeescript', 'mquandalle:jade@0.4.9', 'reactive-var', 'templating'], 'client')
  api.addFiles(['client/main.jade', 'client/main.coffee', 'client/main.sass'], 'client');
  api.export('UIBlock', 'client');
});
