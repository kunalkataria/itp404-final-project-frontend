"use strict";



define('final-project/app', ['exports', 'final-project/resolver', 'ember-load-initializers', 'final-project/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('final-project/blueprints/surge', ['exports', 'ember-cli-surge/blueprints/surge'], function (exports, _surge) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _surge.default;
    }
  });
});
define('final-project/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('final-project/controllers/search', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    favorites: Ember.inject.service(),

    actions: {
      onButtonClick: function onButtonClick(event) {
        event.preventDefault();
        var restaraunt = this.get('restaraunt');
        var location = this.get('location');
        this.get('favorites').addFavorite(restaraunt, location);
      }
    }
  });
});
define('final-project/helpers/app-version', ['exports', 'final-project/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('final-project/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('final-project/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('final-project/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'final-project/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('final-project/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('final-project/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('final-project/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('final-project/initializers/export-application-global', ['exports', 'final-project/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('final-project/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('final-project/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('final-project/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("final-project/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('final-project/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('final-project/router', ['exports', 'final-project/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('search');
    this.route('map');
    this.route('favorite-list');
  });

  exports.default = Router;
});
define('final-project/routes/favorite-list', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('final-project/routes/map', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('final-project/routes/search', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('final-project/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('final-project/services/favorites', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var $ = Ember.$;
  exports.default = Ember.Service.extend({
    addFavorite: function addFavorite(restaraunt, location) {
      console.log('adding favorite');
      $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/api/favorites',
        data: {
          name: restaraunt,
          location: location,
          visited: false
        }
      }).then(function (response) {
        toastr.success(restaraunt + ' was successfully added to your favorites');
      });
    },
    removeFavorite: function removeFavorite(id) {}
  });
});
define('final-project/services/newyelp', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({});
});
define('final-project/services/yelp', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    getRestarauntsNearLocation: function getRestarauntsNearLocation(restaraunt, location) {
      /*
        Wanted to get Yelp API working to search for restaraunts but since they
        do not allow CORS I had trouble getting it to work.
      */
      $.ajax({
        method: 'GET',
        url: 'https://api.yelp.com/v3/businesses/search?term=leos&location=losangeles/',
        headers: {
          // key value pair of headers
          'Access-Control-Allow-Origin': '*'
        }
      }).then(function (response) {}, function (response) {});
    }
  });
});
define("final-project/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1hUAaJgr", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"w3-sidebar w3-bar-block\"],[9,\"id\",\"sidebar\"],[9,\"style\",\"width:20%\"],[7],[0,\"\\n  \"],[6,\"h2\"],[7],[0,\"Navigation\"],[8],[0,\"\\n  \"],[4,\"link-to\",[\"map\"],null,{\"statements\":[[6,\"a\"],[9,\"class\",\"w3-bar-item w3-button\"],[7],[0,\"Map View\"],[8]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"link-to\",[\"favorite-list\"],null,{\"statements\":[[6,\"a\"],[9,\"class\",\"w3-bar-item w3-button\"],[7],[0,\"List view\"],[8]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"link-to\",[\"search\"],null,{\"statements\":[[6,\"a\"],[9,\"class\",\"w3-bar-item w3-button\"],[7],[0,\"Search\"],[8]],\"parameters\":[]},null],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"style\",\"margin-left:20%\"],[7],[0,\"\\n  \"],[6,\"h1\"],[7],[0,\"My favorite restaraunts\"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "final-project/templates/application.hbs" } });
});
define("final-project/templates/favorite-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "GhEWe/M3", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"style\",\"margin-left:20%\"],[7],[0,\"\\n  \"],[6,\"h2\"],[7],[0,\"List:\"],[8],[0,\"\\n\\n  \"],[6,\"ul\"],[7],[0,\"\\n    \"],[6,\"li\"],[7],[0,\"Restaraunt would go here\"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "final-project/templates/favorite-list.hbs" } });
});
define("final-project/templates/map", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6YzvPvvV", "block": "{\"symbols\":[],\"statements\":[[6,\"script\"],[9,\"src\",\"https://maps.googleapis.com/maps/api/js?key=AIzaSyDD8rOqREwtcVvnwQ-CEAiYWXYx1T224Kw&callback=initMap\"],[9,\"async\",\"\"],[9,\"defer\",\"\"],[7],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"style\",\"margin-left:20%\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"id\",\"map\"],[7],[8],[0,\"\\n  \"],[6,\"h2\"],[7],[0,\"Map\"],[8],[0,\"\\n\\n\"],[8],[0,\"\\n\\n\\n\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "final-project/templates/map.hbs" } });
});
define("final-project/templates/search", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "o8DTGQwe", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\\n\\n\"],[6,\"div\"],[9,\"style\",\"margin-left:20%\"],[7],[0,\"\\n  \"],[6,\"h2\"],[7],[0,\"Search\"],[8],[0,\"\\n  \"],[6,\"hr\"],[7],[8],[0,\"\\n\\n  \"],[6,\"form\"],[10,\"onsubmit\",[25,\"action\",[[19,0,[]],\"onButtonClick\"],null],null],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"Restaraunt\"],[8],[0,\"\\n    \"],[1,[25,\"input\",null,[[\"type\",\"value\",\"placeholder\"],[\"text\",[19,0,[\"restaraunt\"]],\"Ex: Bestia\"]]],false],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"Location\"],[8],[0,\"\\n    \"],[1,[25,\"input\",null,[[\"type\",\"value\",\"placeholder\"],[\"text\",[19,0,[\"location\"]],\"Ex: Los Angeles\"]]],false],[0,\"\\n    \"],[6,\"button\"],[9,\"type\",\"submit\"],[7],[0,\"Search\"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "final-project/templates/search.hbs" } });
});


define('final-project/config/environment', ['ember'], function(Ember) {
  var prefix = 'final-project';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("final-project/app")["default"].create({"name":"final-project","version":"0.0.0+cfcd0567"});
}
//# sourceMappingURL=final-project.map
