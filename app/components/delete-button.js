import Ember from 'ember';

export default Ember.Component.extend({
  click() {
    let id = this.get('restarauntId');
    $.ajax({
      type: 'DELETE',
      url: `http://localhost:3000/api/favorites/${id}`,
    }).then(function(response) {
      window.location.reload(true);
    });
  }
});
