import Ember from 'ember';
import layout from '../templates/components/slds-icon';

const defaults = {
  'standard': 'default',
  'utility': 'question',
  'doctype': 'unknown'
};

export default Ember.Component.extend({
  layout,
  tagName: '',
  sprite: 'standard',
  icon: '',
  description: null,
  size: 'medium',

  iconWithDefaults: Ember.computed('sprite', 'icon', function() {
    const { sprite, icon } = this.getProperties('sprite', 'icon');
    return icon || defaults[sprite];
  }),

  backgroundClass: Ember.computed('sprite', 'iconWithDefaults', function() {
    const { sprite, iconWithDefaults } = this.getProperties('sprite', 'iconWithDefaults');
    
    if(sprite === 'utility' || sprite === 'doctype') {
      return '';
    } else {
      return ` slds-icon-${sprite}-${iconWithDefaults}`;
    }
  }),

  colorClass: Ember.computed('sprite', function(){
    const sprite = this.get('sprite');
    
    if(sprite === 'utility') {
      return ' slds-icon-text-default';
    } else {
      return '';
    }
  }),

  sizeClass: Ember.computed('size', function(){
    const size = this.get('size');
    
    return (size === 'medium') 
      ?  ''
      : ` slds-icon--${size}`;
  })
});
