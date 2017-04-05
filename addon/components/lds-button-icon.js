import Ember from 'ember';
import layout from '../templates/components/lds-button-icon';

const typeMappings = {
  'default': 'slds-button--icon',
  'error': 'slds-button--icon-error'
};

export default Ember.Component.extend({
  layout,
  tagName: '',

  type: 'default',
  sprite: 'utility',
  icon: 'question',
  size: 'default',

  buttonClass: Ember.computed('type', function() {
    const type = this.get('type');
    return typeMappings[type];
  }),

  sizeClass: Ember.computed('size', function() {
    const size = this.get('size');
    if(size == 'default') {
      return '';
    }

    return ` slds-button__icon--${size}`
  })
});
