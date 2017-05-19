import Ember from 'ember';
import layout from '../templates/components/slds-spinner';

const sizeMap = {
  'xx-small': 'slds-spinner_xx-small',
  'x-small': 'slds-spinner_x-small',
  small: 'slds-spinner_small',
  medium: 'slds-spinner_medium',
  large: 'slds-spinner_large'
};

const colorMap = {
  default: '',
  brand: 'slds-spinner_brand',
  inverse: 'slds-spinner_inverse'
};

export default Ember.Component.extend({
  layout,

  classNames: ['slds-spinner'],
  classNameBindings: ['sizeClass', 'colorClass'],
  attributeBindings: ['role:status'],

  size: 'medium',
  color: 'default',

  sizeClass: Ember.computed('size', function() {
    const size = this.get('size');
    return sizeMap[size];
  }),

  colorClass: Ember.computed('color', function() {
    const color = this.get('color');
    return colorMap[color];
  })
});
