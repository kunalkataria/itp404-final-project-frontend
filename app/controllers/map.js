import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    handleClick(restaraunt) {
      console.log(restaraunt.location);
      let details = 'Restaraunt: ' + restaraunt.location + ' Location: ' + restaraunt.location;
      if (restaraunt.visited) {
        details += '. Already visited!';
      } else {
        details += '. Not yet visited!';
      }
      this.set('details', details);
    }
  }
});
