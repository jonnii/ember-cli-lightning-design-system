import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    closed() {
      Ember.Logger.info('closed');
    }
  }
});
