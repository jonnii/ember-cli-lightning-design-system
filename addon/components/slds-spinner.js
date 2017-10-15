import { computed } from '@ember/object';
import Component from '@ember/component';
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

export default Component.extend({
  layout,

  classNames: ['slds-spinner'],
  classNameBindings: ['sizeClass', 'colorClass'],
  attributeBindings: ['role:status'],

  size: 'medium',
  color: 'default',

  sizeClass: computed('size', function() {
    const size = this.get('size');
    return sizeMap[size];
  }),

  colorClass: computed('color', function() {
    const color = this.get('color');
    return colorMap[color];
  })
});
