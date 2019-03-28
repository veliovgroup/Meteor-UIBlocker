Package.describe({
  name: 'zheming:uiblocker',
  version: '1.0.0',
  summary: 'UI blocker and loading spinner',
  git: 'https://github.com/VeliovGroup/Meteor-UIBlocker',
  documentation: 'README.md'
})

Package.onUse(function(api) {
  api.use(['reactive-var', 'templating', 'ecmascript'], 'client')

  api.addFiles(['client/main.html', 'client/main.js', 'client/main.css'], 'client')

  api.export('UIBlock', 'client')
})
