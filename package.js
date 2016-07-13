Package.describe({
  name: 'ostrio:uiblocker',
  version: '2.0.1',
  summary: 'UI blocker and loading spinner',
  git: 'https://github.com/VeliovGroup/Meteor-UIBlocker',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['reactive-var', 'templating'], 'client')
  api.addFiles(['client/main.html', 'client/main.js', 'client/main.css'], 'client');
  api.export('UIBlock', 'client');
});
