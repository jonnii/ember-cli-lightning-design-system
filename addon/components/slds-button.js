import Ember from 'ember';
import layout from '../templates/components/slds-button';

const typeMap = {
  'brand': 'slds-button--brand',
  'success': 'slds-button--success',
  'neutral': 'slds-button--neutral',
  'destructive': 'slds-button--destructive',
  'inverse': 'slds-button--inverse',
};

export default Ember.Component.extend({
  layout,
  tagName: 'button',

  classNames: ['slds-button'],
  classNameBindings: ['typeClass'],
  attributeBindings: ['disabled'],

  type: '',
  text: 'Submit',
  disabled: false,
  clicked: null,
  icon: null,
  iconPosition: 'left',

  typeClass: Ember.computed('type', function() {
    const type = this.get('type');
    
    if(Ember.isEmpty(type)) {
      return '';
    }

    return typeMap[type];
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

  click(){
    this.sendAction('clicked');
  },

  actions: {
    clicked() {
      const callback = this.get('clicked');
      
      if(callback) { 
        callback();
      }
    }
  }
});
