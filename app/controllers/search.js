import Ember from 'ember';

export default Ember.Controller.extend({
  favorites: Ember.inject.service(),

  actions: {
    onButtonClick(event) {
      event.preventDefault();
      let restaraunt = this.get('restaraunt');
      let location = this.get('location');
      this.get('favorites').addFavorite(restaraunt, location);
    }
  }
});
