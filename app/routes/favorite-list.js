import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // let url = `http://localhost:3000/api/favorites`;
    // let response = $.getJSON(url);
    // return response;

    return $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/api/favorites',
    });
  },


});
