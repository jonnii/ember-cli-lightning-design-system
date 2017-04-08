import Ember from 'ember';
import layout from '../templates/components/slds-menu';

export default Ember.Component.extend({
  layout,
  tagName: '',
  isOpen: false,
  position: 'topLeft',

  openClass: Ember.computed('isOpen', function() {
    const isOpen = this.get('isOpen');
    return isOpen ? ' slds-is-open' : '';
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
