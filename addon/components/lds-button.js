import Ember from 'ember';
import layout from '../templates/components/lds-button';

export default Ember.Component.extend({
  layout,
  tagName: '',
  type: '',
  text: 'Submit',
  disabled: false,
  clicked: null,

  typeClass: Ember.computed('type', function() {
    const type = this.get('type');
    return Ember.isEmpty(type) 
      ? '' 
      : `slds-button--${type}`
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
