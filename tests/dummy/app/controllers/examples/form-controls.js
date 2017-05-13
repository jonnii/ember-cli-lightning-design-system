import Ember from 'ember';

export default Ember.Controller.extend({
  cake: true,
  death: false,
  
  actions: {
    toggle(value) {
      this.toggleProperty(value);
    }
  }
});
