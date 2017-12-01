import Ember from 'ember';
import $ from 'jquery';

export default Ember.Service.extend({
  addFavorite(restaraunt, location) {
    console.log('adding favorite');
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/favorites',
      data: {
        name: restaraunt,
        location: location,
        visited: false,
      }
    }).then(function(response) {
      toastr.success(restaraunt + ' was successfully added to your favorites');
    }, function(response) {
      toastr.error('something went wrong, was not able to add ' + restaraunt + ' to your favorites');
    });
  },

  removeFavorite(id) {

  }
});
