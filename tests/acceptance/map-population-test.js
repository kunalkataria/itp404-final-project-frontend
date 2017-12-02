import { test } from 'qunit';
import moduleForAcceptance from 'final-project/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | map population');

test('visiting /map-population', function(assert) {
  visit('/map-population');

  andThen(function() {
    assert.equal(currentURL(), '/map-population');
  });
});
