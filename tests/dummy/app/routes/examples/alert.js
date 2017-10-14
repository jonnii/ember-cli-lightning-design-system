import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  actions: {
    closed() {
      Ember.Logger.info('closed');
    }
  }
});
