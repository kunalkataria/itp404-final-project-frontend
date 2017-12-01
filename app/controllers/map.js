import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    handleClick(restaraunt) {
      console.log(restaraunt.location);
      this.set('details', restaraunt.name);
    }
  }
});
