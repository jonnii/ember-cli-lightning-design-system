import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/slds-illustration';

const sizeMap = {
  small: 'slds-illustration_small',
  large: 'slds-illustration_large'
};

export default Component.extend({
  layout,
  classNames: ['slds-illustration'],
  classNameBindings: ['sizeClass'],

  size: 'small',

  sizeClass: computed('size', function() {
    const size = this.get('size');
    return sizeMap[size];
  })
});
