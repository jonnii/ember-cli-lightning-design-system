import Ember from 'ember';
import layout from '../templates/components/slds-dropdown';

const positionClassMap = {
  'topLeft': 'slds-dropdown--left',
  'top': '',
  'topRight': 'slds-dropdown--right',
  'bottomLeft': 'slds-dropdown--bottom slds-dropdown--left',
  'bottom': 'slds-dropdown--bottom',
  'bottomRight': 'slds-dropdown--bottom slds-dropdown--right',
};

const nubbinClassMap = {
  'none': '',
  'left': 'slds-nubbin--left',
  'leftTop': 'slds-nubbin--left-top',
  'leftBottom': 'slds-nubbin--left-bottom',
  'top': 'slds-nubbin--top',
  'topLeft': 'slds-nubbin--top-left',
  'topRight': 'slds-nubbin--top-right',
  'right': 'slds-nubbin--right',
  'rightTop': 'slds-nubbin--right-top',
  'rightBottom': 'slds-nubbin--right-bottom',
  'bottom': 'slds-nubbin--bottom',
  'bottomLeft': 'slds-nubbin--bottom-left',
  'bottomRight': 'slds-nubbin--bottom-right'
};

export default Ember.Component.extend({
  layout,
  
  classNames: ['slds-dropdown'],
  classNameBindings: ['positionClass', 'nubbinClass'],

  isOpen: false,
  position: 'topLeft',
  nubbin: 'none',

  openClass: Ember.computed('isOpen', function() {
    const isOpen = this.get('isOpen');
    return isOpen ? ' slds-is-open' : '';
  }),

  positionClass: Ember.computed('position', function(){
    const position = this.get('position');
    return positionClassMap[position];
  }),

  nubbinClass: Ember.computed('nubbin', function(){
    const nubbin = this.get('nubbin');
    return nubbinClassMap[nubbin];
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
