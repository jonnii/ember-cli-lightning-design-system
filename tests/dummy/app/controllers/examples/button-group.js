import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    buttonClicked(option) {
      alert(`clicked it: ${option}`);
    }
  }
});
