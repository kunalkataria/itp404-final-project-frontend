import Ember from 'ember';

export default Ember.Controller.extend({
  loading: false,

  actions: {
    switchVisitStatus(newVisitStatus) {
      console.log('hello there');
    }
  }
});
