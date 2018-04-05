import Component from '@ember/component';
import { next } from '@ember/runloop';
import layout from '../templates/components/slds-modal-container';

export default Component.extend({
  layout,

  classNames: 'slds-modal',
  classNameBindings: 'isShowing:slds-fade-in-open',
  attributeBindings: ['role:role'],

  role: 'dialog',
  isShowing: false,

  didInsertElement() {
    next(() => {
      this.set('isShowing', true);
    });
  },

  actions: {
    closed(close) {
      if (close) {
        close();
      }
    }
  }
});
