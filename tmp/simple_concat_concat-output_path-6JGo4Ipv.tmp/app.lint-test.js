QUnit.module('ESLint | app');

QUnit.test('app.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'app.js should pass ESLint\n\n');
});

QUnit.test('controllers/search.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'controllers/search.js should pass ESLint\n\n');
});

QUnit.test('resolver.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'resolver.js should pass ESLint\n\n');
});

QUnit.test('router.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'router.js should pass ESLint\n\n');
});

QUnit.test('routes/favorite-list.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/favorite-list.js should pass ESLint\n\n');
});

QUnit.test('routes/map.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/map.js should pass ESLint\n\n');
});

QUnit.test('routes/search.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/search.js should pass ESLint\n\n');
});

QUnit.test('services/favorites.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'services/favorites.js should pass ESLint\n\n6:5 - Unexpected console statement. (no-console)\n15:22 - \'response\' is defined but never used. (no-unused-vars)\n16:7 - \'toastr\' is not defined. (no-undef)\n21:18 - \'id\' is defined but never used. (no-unused-vars)');
});

QUnit.test('services/newyelp.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'services/newyelp.js should pass ESLint\n\n');
});

QUnit.test('services/yelp.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'services/yelp.js should pass ESLint\n\n5:42 - \'location\' is defined but never used. (no-unused-vars)\n10:5 - \'$\' is not defined. (no-undef)\n17:22 - \'response\' is defined but never used. (no-unused-vars)\n19:17 - \'response\' is defined but never used. (no-unused-vars)');
});
