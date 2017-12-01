import Ember from 'ember';

export default Ember.Component.extend({
  click() {
    let visited = this.get('visited');
    let id = this.get('id');
    console.log(id);
    $.ajax({
      type: 'PATCH',
      url: `http://localhost:3000/api/favorites/${id}`,
      data: {
        visited: !visited,
      }
    }).then(function(response) {
      this.set('visited', !visited);
    }.bind(this), function(response) {
      toastr.error('something went wrong, was not able to switch visit status');
    });
  },

});
