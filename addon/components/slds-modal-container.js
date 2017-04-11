import Ember from 'ember';
import layout from '../templates/components/slds-modal-container';

export default Ember.Component.extend({
  layout,

  actions: {
    closed(close) {
      if(close) {
        close();
      }
    }
  }
});
