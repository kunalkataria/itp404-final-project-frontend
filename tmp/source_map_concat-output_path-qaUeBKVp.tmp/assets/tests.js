'use strict';

define('final-project/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/search.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/search.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/kunal-logger.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/kunal-logger.js should pass ESLint\n\n4:3 - Unexpected console statement. (no-console)\n5:3 - Unexpected console statement. (no-console)');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/favorite-list.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/favorite-list.js should pass ESLint\n\n4:9 - \'params\' is defined but never used. (no-unused-vars)\n9:12 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('routes/map.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/map.js should pass ESLint\n\n5:5 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/search.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/search.js should pass ESLint\n\n');
  });

  QUnit.test('services/favorites.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/favorites.js should pass ESLint\n\n6:5 - Unexpected console statement. (no-console)\n15:22 - \'response\' is defined but never used. (no-unused-vars)\n16:7 - \'toastr\' is not defined. (no-undef)\n21:18 - \'id\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('services/yelp.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/yelp.js should pass ESLint\n\n5:42 - \'location\' is defined but never used. (no-unused-vars)\n10:5 - \'$\' is not defined. (no-undef)\n17:22 - \'response\' is defined but never used. (no-unused-vars)\n19:17 - \'response\' is defined but never used. (no-unused-vars)');
  });
});
define('final-project/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('final-project/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'final-project/tests/helpers/start-app', 'final-project/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('final-project/tests/helpers/resolver', ['exports', 'final-project/resolver', 'final-project/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('final-project/tests/helpers/start-app', ['exports', 'final-project/app', 'final-project/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('final-project/tests/integration/helpers/kunal-logger-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('kunal-logger', 'helper:kunal-logger', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "SO0K7Opr",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"kunal-logger\",[[19,0,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('final-project/tests/test-helper', ['final-project/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('final-project/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/kunal-logger-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/kunal-logger-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/search-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/search-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/favorite-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/favorite-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/map-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/map-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/search-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/search-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/favorites-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/favorites-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/yelp-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/yelp-test.js should pass ESLint\n\n');
  });
});
define('final-project/tests/unit/controllers/search-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:search', 'Unit | Controller | search', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
    needs: ['service:yelp']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('final-project/tests/unit/routes/favorite-list-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:favorite-list', 'Unit | Route | favorite list', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('final-project/tests/unit/routes/map-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:map', 'Unit | Route | map', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('final-project/tests/unit/routes/search-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:search', 'Unit | Route | search', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
    needs: ['service:yelp']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('final-project/tests/unit/services/favorites-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:favorites', 'Unit | Service | favorites', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('final-project/tests/unit/services/yelp-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:yelp', 'Unit | Service | yelp', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
require('final-project/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
