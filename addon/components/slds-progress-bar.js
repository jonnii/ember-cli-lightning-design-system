import { htmlSafe } from '@ember/string';
import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/slds-progress-bar';

const heightMap = {
  default: '',
  'x-small': 'slds-progress-bar_x-small',
  small: 'slds-progress-bar_small',
  medium: 'slds-progress-bar_medium',
  large: 'slds-progress-bar_large'
};

export default Component.extend({
  layout,

  classNames: ['slds-progress-bar'],
  classNameBindings: ['heightClass', 'borderClass'],
  attributeBindings: ['role:role', 'minValue:aria-valuemin', 'maxValue:aria-valuemax', 'value:aria-valuenow'],

  role: 'progressbar',
  minValue: 0,
  maxValue: 100,
  value: 0,
  height: 'default',

  progressStyle: computed('value', function() {
    const value = this.get('value');
    const parsed = parseInt(value, 10);
    return htmlSafe(`width:${parsed}%;`);
  }),

  heightClass: computed('height', function() {
    const height = this.get('height');
    return heightMap[height];
  }),

  borderClass: computed('border', function() {
    const border = this.get('border');
    if (border == 'circular') {
      return 'slds-progress-bar_circular';
    }
    return '';
  })
});
