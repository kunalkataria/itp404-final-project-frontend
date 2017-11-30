/* unused because yelp does not allow CORS */
import Ember from 'ember';

export default Ember.Service.extend({
  getRestarauntsNearLocation(restaraunt, location) {
    console.log('hello there!!');
    $.ajax({
      method: 'GET',
      url: 'https://api.yelp.com/v3/businesses/search?term=leos&location=losangeles/',
      headers: {
        // key value pair of headers
        'Access-Control-Allow-Origin': '*'
      },
    }).then(function(response) {
      console.log('succcess');
      console.log(response);
    }, function(response) {
      console.log('hello');
      console.log(response);
    });

  }
});
