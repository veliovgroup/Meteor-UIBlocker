Package.describe({
  name: 'ostrio:uiblocker',
  version: '1.0.0',
  summary: 'UI blocker and loading spinner',
  git: 'https://github.com/VeliovGroup/Meteor-UIBlocker',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.2');
  api.use(['fourseven:scss@0.9.6', 'coffeescript', 'mquandalle:jade@0.4.1', 'reactive-var', 'templating'], 'client')
  api.addFiles(['client/main.coffee', 'client/main.jade', 'client/main.sass'], 'client');
});
