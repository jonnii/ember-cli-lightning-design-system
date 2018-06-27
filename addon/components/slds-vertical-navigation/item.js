import Component from '@ember/component';
import layout from '../../templates/components/slds-vertical-navigation/item';

export default Component.extend({
  layout,
  tagName: 'li',
  classNames: ['slds-nav-vertical__item'],
  classNameBindings: ['isActive:slds-is-active'],

  actions: {
    clicked() {
      this.clicked();
    }
  }
});
