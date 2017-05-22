import Ember from 'ember';
import layout from '../templates/components/slds-icon';

const defaults = {
  standard: 'default',
  utility: 'question',
  doctype: 'unknown'
};

const colorMap = {
  none: '',
  light: ' slds-icon-text-light',
  error: ' slds-icon-text-error',
  warning: ' slds-icon-text-warning',
  default: ' slds-icon-text-default'
};

export default Ember.Component.extend({
  layout,

  tagName: 'span',
  classNames: ['slds-icon_container'],
  classNameBindings: ['backgroundClass'],
  attributeBindings: ['description:title'],

  color: 'default',
  sprite: 'standard',
  icon: '',
  description: null,
  size: 'medium',

  iconWithDefaults: Ember.computed('sprite', 'icon', function() {
    const { sprite, icon } = this.getProperties('sprite', 'icon');
    return icon || defaults[sprite];
  }),

  backgroundClass: Ember.computed('sprite', 'iconWithDefaults', function() {
    const { sprite, iconWithDefaults } = this.getProperties('sprite', 'iconWithDefaults');

    if (sprite === 'utility' || sprite === 'doctype') {
      return '';
    } else {
      return `slds-icon-${sprite}-${iconWithDefaults}`;
    }
  }),

  colorClass: Ember.computed('sprite', function() {
    const color = this.get('color');

    if (color == 'default') {
      const sprite = this.get('sprite');

      if (sprite === 'utility') {
        return ' slds-icon-text-default';
      } else {
        return '';
      }
    }

    return colorMap[color];
  }),

  sizeClass: Ember.computed('size', function() {
    const size = this.get('size');

    return size === 'medium' ? '' : ` slds-icon--${size}`;
  })
});
