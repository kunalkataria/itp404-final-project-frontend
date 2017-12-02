import Ember from 'ember';
import ENV from 'final-project/config/environment';

export default Ember.Route.extend({
  titleToken: 'Map of restaraunts',

  model(params) {
    return $.ajax({
      type: 'GET',
      url: `${ENV.apiHOST}/favorites/`,
    });
  }
});
