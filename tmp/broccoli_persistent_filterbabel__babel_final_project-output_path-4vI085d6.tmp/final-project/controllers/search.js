define('final-project/controllers/search', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    favorites: Ember.inject.service(),

    actions: {
      onButtonClick: function onButtonClick(event) {
        event.preventDefault();
        var restaraunt = this.get('restaraunt');
        var location = this.get('location');
        this.get('favorites').addFavorite(restaraunt, location);
      }
    }
  });
});