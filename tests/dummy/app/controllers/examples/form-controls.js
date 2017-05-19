import Ember from 'ember';

export default Ember.Controller.extend({
  cake: true,
  death: false,
  life: false,
  isAwesome: false,
  chess: true,
  checkers: false,

  actions: {
    toggle(value) {
      this.toggleProperty(value);
    },

    choose(fate) {
      this.set('fate', fate);
    },

    chooseMusic(music) {
      this.set('music', music);
    },

    choosePet(pet) {
      this.set('pet', pet);
    }
  }
});
