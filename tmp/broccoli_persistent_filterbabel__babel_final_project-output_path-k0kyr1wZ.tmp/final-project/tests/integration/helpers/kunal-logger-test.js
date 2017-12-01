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