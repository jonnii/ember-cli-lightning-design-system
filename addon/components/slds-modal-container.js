import Component from '@ember/component';
import layout from '../templates/components/slds-modal-container';

export default Component.extend({
  layout,
  tagName: '',

  actions: {
    closed(close) {
      if (close) {
        close();
      }
    }
  }
});
