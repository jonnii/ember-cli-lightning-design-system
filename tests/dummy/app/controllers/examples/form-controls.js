import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    checked(value) {
      this.set('lastCheckedValue', value);
    }
  }
});
