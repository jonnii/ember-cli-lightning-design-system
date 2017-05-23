import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    toggleBanner() {
      Ember.Logger.info('showing banner');
      this.controller.toggleProperty('showBanner');
    }
  }
});
