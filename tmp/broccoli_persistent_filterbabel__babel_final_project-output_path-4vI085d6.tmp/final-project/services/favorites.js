define('final-project/services/favorites', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var $ = Ember.$;
  exports.default = Ember.Service.extend({
    addFavorite: function addFavorite(restaraunt, location) {
      console.log('adding favorite');
      $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/api/favorites',
        data: {
          name: restaraunt,
          location: location,
          visited: false
        }
      }).then(function (response) {
        toastr.success(restaraunt + ' was successfully added to your favorites');
      });
    },
    removeFavorite: function removeFavorite(id) {}
  });
});