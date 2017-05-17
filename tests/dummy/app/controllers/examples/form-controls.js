import Ember from 'ember';

export default Ember.Controller.extend({
  cake: true,
  death: false,
  life: false,

  actions: {
    toggle(value) {
      this.toggleProperty(value);
    },

    choose(fate) {
      this.set('fate', fate);
    }
  }
});
