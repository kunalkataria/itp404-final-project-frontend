define('final-project/services/yelp', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    getRestarauntsNearLocation: function getRestarauntsNearLocation(restaraunt, location) {
      /*
        Wanted to get Yelp API working to search for restaraunts but since they
        do not allow CORS I had trouble getting it to work.
      */
      $.ajax({
        method: 'GET',
        url: 'https://api.yelp.com/v3/businesses/search?term=leos&location=losangeles/',
        headers: {
          // key value pair of headers
          'Access-Control-Allow-Origin': '*'
        }
      }).then(function (response) {}, function (response) {});
    }
  });
});