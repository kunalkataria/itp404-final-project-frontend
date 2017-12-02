import Ember from 'ember';
import ENV from 'final-project/config/environment';
import $ from 'jquery';

export default Ember.Service.extend({
  addFavorite(restaraunt, location) {
    $.ajax({
      type: 'POST',
      url: `${ENV.apiHOST}/favorites`,
      data: {
        name: restaraunt,
        location: location,
        visited: false,
      }
    }).then(function(response) {
      toastr.success(restaraunt + ' was successfully added to your favorites');
    }, function(response) {
      toastr.error('something went wrong, was not able to add ' + restaraunt + ' to your favorites');
      console.log(response);
    });
  },
});
