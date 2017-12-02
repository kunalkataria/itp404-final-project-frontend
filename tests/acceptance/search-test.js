import { test } from 'qunit';
import moduleForAcceptance from 'final-project/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | search');

// default generated test
/* test('visiting /search', function(assert) {
  visit('/search');

  andThen(function() {
    assert.equal(currentURL(), '/search');
  });

}); */

test('create new favorite restaraunt', function(assert) {
  visit('/search');
  fillIn('#restaraunt', 'Bestia');
  fillIn('#location', '2121 E 7th Pl, Los Angeles, CA 90021')
  click('button.submit');
  andThen(function() {
    assert.equal('#restaraunt', '');
    assert.equal('#location', '');
  });
});
