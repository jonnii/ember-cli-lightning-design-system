import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    progress(message) {
      alert(message);
    }
  }
});
