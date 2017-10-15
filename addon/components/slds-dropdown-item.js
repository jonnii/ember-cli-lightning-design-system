import Component from '@ember/component';
import layout from '../templates/components/slds-dropdown-item';

export default Component.extend({
  layout,
  tagName: '',
  clicked: null,

  actions: {
    clicked(handler, next) {
      if (handler) {
        handler(next);
      }
    }
  }
});
