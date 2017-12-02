import Ember from 'ember';
import ENV from 'final-project/config/environment';

export default Ember.Component.extend({
  click() {
    let id = this.get('restarauntId');
    $.ajax({
      type: 'DELETE',
      url: `${ENV.apiHOST}/favorites/${id}`,
    }).then(function(response) {
      /* will force the page to refresh and get the new list without the element
        that was just deleted */
      window.location.reload(true);
    }, function(response) {
      toastr.error('Something went wrong when trying to delete');
    });
  }
});
