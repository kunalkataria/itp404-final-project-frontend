import { test } from 'qunit';
import moduleForAcceptance from 'final-project/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | add restaraunt');

// tests that after you insert a restaraunt, you can see it on the favorites list
// test tests on an empty api database, test does not pass if database is populated
test('visiting /favorite-list', function(assert) {
  visit('/search');

  fillIn('#restaraunt', 'Bestia');
  fillIn('#location', '2121 E 7th Pl, Los Angeles, CA 90021')
  click('#add');

  visit('/favorite-list');

  andThen(function() {
    assert.equal(find('div.restaraunt div:first').text(), 'Name: Bestia');
    assert.equal(find('div.restaraunt div:second').text(), 'Location: 2121 E 7th Pl, Los Angeles, CA 90021');
    assert.equal(currentURL(), '/favorite-list');
  });
});
