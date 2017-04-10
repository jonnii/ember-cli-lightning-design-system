import Ember from 'ember';
import layout from '../templates/components/slds-button-icon';

const typeMappings = {
  'default':  'slds-button--icon',
  'error':    'slds-button--icon-error',
};

const borderMappings = {
  'outline': 'slds-button--icon-border',
  'filled': 'slds-button--icon-border-filled'
};

export default Ember.Component.extend({
  layout,
  tagName: 'button',
  classNames: ['slds-button'],
  classNameBindings: ['typeClass', 'borderClass', 'selectedClass'],
  attributeBindings: ['titleWithDefault:title', 'disabled', 'ariaHaspopup:aria-haspopup'],

  type: 'default',
  sprite: 'utility',
  icon: 'question',
  size: 'default',
  border: 'none',
  titleWithDefault: Ember.computed.or('title', 'icon'),
  
  clicked: null,

  typeClass: Ember.computed('type', function() {
    const type = this.get('type');
    return typeMappings[type];
  }),

  sizeClass: Ember.computed('size', function() {
    const size = this.get('size');
    if(size == 'default') {
      return '';
    }

    return ` slds-button__icon--${size}`
  }),

  borderClass: Ember.computed('border', function(){
    const border = this.get('border');
    return border == 'none' ? '' : `${borderMappings[border]}`;
  }),

  selectedClass: Ember.computed('isSelected', function() {
    const isSelected = this.get('isSelected');
    return isSelected ? 'slds-is-selected' : '';
  }),

  click() {
    this.sendAction('clicked', this.get('clicked'))
  },

  actions: {
    clicked(handler) {
      if(handler != null) {
        handler();
      }
    }
  }
});
