import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  actions: {
    showToast() {
      Ember.get(this, 'flashMessages').success('Success!');
    }
  }
});
