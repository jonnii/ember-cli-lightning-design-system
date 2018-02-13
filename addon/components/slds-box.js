import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/slds-box';

const sizeMap = {
  default: '',
  small: 'slds-box_small',
  'x-small': 'slds-box_x-small',
  'xx-small': 'slds-box_xx-small'
};

export default Component.extend({
  layout,
  classNames: 'slds-box',
  classNameBindings: ['sizeClass'],

  size: 'default',
  sizeClass: computed('size', function() {
    return sizeMap[this.get('size')];
  })
});
