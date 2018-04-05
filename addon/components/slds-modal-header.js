import Component from '@ember/component';
import layout from '../templates/components/slds-modal-header';

export default Component.extend({
  layout,
  classNames: 'slds-modal__header',

  actions: {
    modalClosed(closedAction) {
      if (closedAction) {
        closedAction();
      }
    }
  }
});
