import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    navigateTo(route) {
      this.transitionTo(route);
    }
  }
});
