import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    handleClick(restaraunt) {
      let details = 'Restaraunt: ' + restaraunt.name + ' Location: ' + restaraunt.location;
      if (restaraunt.visited) {
        details += '. Already visited!';
      } else {
        details += '. Not yet visited!';
      }
      this.set('details', details);
    }
  }
});
