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

// tests that when you make a new restaraunt that the input boxes are cleared out
test('create new favorite restaraunt', function(assert) {
  visit('/search');
  fillIn('#restaraunt', 'Bestia');
  fillIn('#location', '2121 E 7th Pl, Los Angeles, CA 90021')
  click('#add');

  // check to see that the input boxes are cleared out after submitting
  andThen(function() {
    assert.equal(find('#restaraunt').text(), '');
    assert.equal(find('#location').text(), '');
  });
});
