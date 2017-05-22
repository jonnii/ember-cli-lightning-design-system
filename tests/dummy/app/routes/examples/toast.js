import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  actions: {
    showInfo() {
      Ember.get(this, 'flashMessages').info('Amazing story bro!');
    },

    showSuccess() {
      Ember.get(this, 'flashMessages').success('Amazing story bro!');
    },

    showWarning() {
      Ember.get(this, 'flashMessages').warning('Amazing story bro!');
    },

    showError() {
      Ember.get(this, 'flashMessages').danger('Amazing story bro!');
    }
  }
});
