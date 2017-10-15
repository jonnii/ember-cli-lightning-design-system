import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  flashMessages: service(),

  actions: {
    closed() {
      Ember.Logger.info('closed');
    },

    showInfo() {
      get(this, 'flashMessages').info('Amazing story bro!');
    },

    showSuccess() {
      get(this, 'flashMessages').success('Amazing story bro!');
    },

    showWarning() {
      get(this, 'flashMessages').warning('Amazing story bro!');
    },

    showError() {
      get(this, 'flashMessages').error('Amazing story bro!');
    }
  }
});
