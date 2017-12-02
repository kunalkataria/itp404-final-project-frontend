import { test } from 'qunit';
import moduleForAcceptance from 'final-project/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | map population');

// this test ensures that the map shows if there is atleast one restaraunt in the favorite list
test('testing map', function(assert) {
  visit('/search');

  fillIn('#restaraunt', 'Bestia');
  fillIn('#location', '2121 E 7th Pl, Los Angeles, CA 90021')
  click('#add');

  andThen(function() {
    assert.ok(find('.g-map'));
  });
});
