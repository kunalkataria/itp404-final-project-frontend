import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Map of restaraunts',

  model(params) {
    return $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/api/favorites',
    });
  }
});
