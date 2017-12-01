import Ember from 'ember';

export default Ember.Component.extend({
  click() {
    let visited = this.get('visited');
    let id = this.get('id');
    console.log(id);
    this.set('loading', true);
    $.ajax({
      type: 'PATCH',
      url: `http://localhost:3000/api/favorites/${id}`,
      data: {
        visited: !visited,
      }
    }).then(function(response) {
      /* This run later slows down the actual setting so it makes it look like
        the code is taking longer than actual to make user feel that the change
        is more permanent */
      Ember.run.later((function() {
        this.set('visited', !visited);
        this.set('loading', false);
      }.bind(this)), 500);
    }.bind(this), function(response) {
      toastr.error('something went wrong, was not able to switch visit status');
    });
  },

});
