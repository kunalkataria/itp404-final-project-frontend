import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    handleClick(restaraunt) {
      this.set('details', restaraunt.name);
    }
  }
});
