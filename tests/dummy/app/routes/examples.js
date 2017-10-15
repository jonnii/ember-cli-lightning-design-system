import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  actions: {
    toggleBanner() {
      Ember.Logger.info('showing banner');
      this.controller.toggleProperty('showBanner');
    }
  }
});
