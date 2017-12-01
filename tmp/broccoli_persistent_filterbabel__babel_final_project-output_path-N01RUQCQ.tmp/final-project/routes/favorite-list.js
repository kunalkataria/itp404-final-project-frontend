define('final-project/routes/favorite-list', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model(params) {
      // let url = `http://localhost:3000/api/favorites`;
      // let response = $.getJSON(url);
      // return response;

      return $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/favorites'
      });
    }
  });
});