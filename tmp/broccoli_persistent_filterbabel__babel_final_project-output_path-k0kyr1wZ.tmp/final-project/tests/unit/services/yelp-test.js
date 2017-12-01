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