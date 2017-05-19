import Ember from 'ember';
import layout from '../templates/components/slds-progress-bar';

const heightMap = {
  default: '',
  'x-small': 'slds-progress-bar_x-small',
  small: 'slds-progress-bar_small',
  medium: 'slds-progress-bar_medium',
  large: 'slds-progress-bar_large'
};

export default Ember.Component.extend({
  layout,

  classNames: ['slds-progress-bar'],
  classNameBindings: ['heightClass', 'borderClass'],
  attributeBindings: ['role:role', 'minValue:aria-valuemin', 'maxValue:aria-valuemax', 'value:aria-valuenow'],

  role: 'progressbar',
  minValue: 0,
  maxValue: 100,
  value: 0,
  height: 'default',

  progressStyle: Ember.computed('value', function() {
    const value = this.get('value');
    const parsed = parseInt(value, 10);
    return Ember.String.htmlSafe(`width:${parsed}%;`);
  }),

  heightClass: Ember.computed('height', function() {
    const height = this.get('height');
    return heightMap[height];
  }),

  borderClass: Ember.computed('border', function() {
    const border = this.get('border');
    if (border == 'circular') {
      return 'slds-progress-bar_circular';
    }
    return '';
  })
});
