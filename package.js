Package.describe({
  name: 'ostrio:uiblocker',
  version: '1.0.0',
  summary: 'UI blocker and loading spinner',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.2');
  api.use(['fourseven:scss@0.9.6', 'coffeescript', 'mquandalle:jade', 'reactive-var', 'templating'], 'client')
  api.addFiles(['client/main.coffee', 'client/main.jade', 'client/main.sass'], 'client');
});
