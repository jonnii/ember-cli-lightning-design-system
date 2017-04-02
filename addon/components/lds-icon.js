import Ember from 'ember';
import layout from '../templates/components/lds-icon';

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

  myIcon: Ember.computed('sprite', 'icon', function() {
    const { sprite, icon } = this.getProperties('sprite', 'icon');
    
    return icon || defaults[sprite];
  }),

  backgroundClass: Ember.computed('sprite', 'myIcon', function() {
    const { sprite, myIcon } = this.getProperties('sprite', 'myIcon');
    
    if(sprite === 'utility' || sprite === 'doctype') {
      return '';
    } else {
      return `slds-icon-${sprite}-${myIcon}`;
    }
  }),

  colorClass: Ember.computed('sprite', function(){
    const sprite = this.get('sprite');
    
    if(sprite === 'utility') {
      return 'slds-icon-text-default';
    } else {
      return '';
    }
  })
});
