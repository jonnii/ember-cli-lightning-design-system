import Ember from 'ember';
import layout from '../templates/components/slds-button';

export default Ember.Component.extend({
  layout,
  tagName: '',
  type: '',
  text: 'Submit',
  disabled: false,
  clicked: null,
  icon: null,
  iconPosition: 'left',

  typeClass: Ember.computed('type', function() {
    const type = this.get('type');
    return Ember.isEmpty(type) 
      ? '' 
      : `slds-button--${type}`
  }),

  shouldRenderLeftIcon: Ember.computed('icon', 'iconPosition', function() {
    const { icon, iconPosition} = this.getProperties('icon', 'iconPosition');

    if(Ember.isEmpty(icon)) {
      return false;
    }

    return iconPosition == 'left';
  }),

  shouldRenderRightIcon: Ember.computed('icon', 'iconPosition', function() {
    const { icon, iconPosition} = this.getProperties('icon', 'iconPosition');
    
    if(Ember.isEmpty(icon)) {
      return false;
    }

    return iconPosition == 'right';
  }),

  actions: {
    clicked() {
      const callback = this.get('clicked');
      
      if(callback) { 
        callback();
      }
    }
  }
});
