import Ember from 'ember';
import layout from '../templates/components/slds-menu';

export default Ember.Component.extend({
  layout,
  classNames: ['slds-dropdown-trigger', 'slds-dropdown-trigger--click'],
  classNameBindings: ['isOpen:slds-is-open'],
  attributeBindings: ['ariaExpanded:aria-expanded'],

  isOpen: false,
  position: 'topLeft',

  ariaExpanded: Ember.computed('isOpen', function() {
    const isOpen = this.get('isOpen');
    return isOpen.toString();
  }),

  actions: {
    toggle() {
      this.toggleProperty('isOpen');
    },

    clicked(itemClickAction) {
      this.set('isOpen', false);
      itemClickAction();
    }
  }
});
