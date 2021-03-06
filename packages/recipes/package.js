Package.describe({
  name: 'recipes',
});

Package.onUse(function (api) {

  api.use([

    'promise',

    // vulcan core
    'vulcan:core@=1.14.1',

    // vulcan packages
    'vulcan:forms@=1.14.1',
    'vulcan:accounts@=1.14.1',
    'vulcan:forms-upload@=1.14.1',
    'vulcan:ui-bootstrap@=1.14.1',

    // third-party packages
    'fourseven:scss@4.5.0',

  ]);

  api.addFiles('lib/stylesheets/style.scss');

  api.addAssets([
    'lib/static/banner.png'
  ], ['client']);

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');

});
