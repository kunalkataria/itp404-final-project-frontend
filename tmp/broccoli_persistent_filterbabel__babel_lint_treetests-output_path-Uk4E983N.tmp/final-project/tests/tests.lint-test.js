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