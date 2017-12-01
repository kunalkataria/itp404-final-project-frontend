define('final-project/routes/map', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    initMap: function initMap() {
      console.log('ROUTE INIT MAP CALLED');
    }
  });
});