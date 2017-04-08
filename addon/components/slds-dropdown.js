import Ember from 'ember';
import layout from '../templates/components/slds-dropdown';


const positionClassMap = {
  'topLeft': ' slds-dropdown--left',
  'top': '',
  'topRight': ' slds-dropdown--right',
  'bottomLeft': ' slds-dropdown--bottom slds-dropdown--left',
  'bottom': ' slds-dropdown--bottom',
  'bottomRight': ' slds-dropdown--bottom slds-dropdown--right',
};

export default Ember.Component.extend({
  layout,
  tagName: '',
  isOpen: false,
  position: 'topLeft',

  openClass: Ember.computed('isOpen', function() {
    const isOpen = this.get('isOpen');
    return isOpen ? ' slds-is-open' : '';
  }),

  positionClass: Ember.computed('position', function(){
    const position = this.get('position');
    return positionClassMap[position];
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
