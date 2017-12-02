import { test } from 'qunit';
import moduleForAcceptance from 'final-project/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | add restaraunt');

test('visiting /add-restaraunt', function(assert) {
  visit('/search');

  fillIn('#restaraunt', 'Bestia');
  fillIn('#location', '2121 E 7th Pl, Los Angeles, CA 90021')
  click('#add');

  visit('/favorite-list');

  andThen(function() {
    assert.equal(currentURL(), '/favorite-list');
  });
});
