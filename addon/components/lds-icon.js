import Ember from 'ember';
import layout from '../templates/components/lds-icon';

export default Ember.Component.extend({
  layout,
  tagName: '',
  sprite: 'standard',
  icon: '',
  description: null,

  myIcon: Ember.computed('sprite', 'icon', function() {
    const { sprite, icon } = this.getProperties('sprite', 'icon');
    
    if (icon) {
      return icon;
    }

    if(sprite === 'utility') {
      return 'question';
    } else {
      return 'default';
    }
  }),

  backgroundClass: Ember.computed('sprite', 'myIcon', function() {
    const { sprite, myIcon } = this.getProperties('sprite', 'myIcon');
    
    if(sprite === 'utility') {
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
