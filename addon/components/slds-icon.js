import { computed } from '@ember/object';
import Component from '@ember/component';
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

export default Component.extend({
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

  iconWithDefaults: computed('sprite', 'icon', function() {
    const { sprite, icon } = this.getProperties('sprite', 'icon');
    return icon || defaults[sprite];
  }),

  backgroundClass: computed('sprite', 'iconWithDefaults', function() {
    const { sprite, iconWithDefaults } = this.getProperties('sprite', 'iconWithDefaults');

    if (sprite === 'utility' || sprite === 'doctype') {
      return '';
    } else {
      return `slds-icon-${sprite}-${iconWithDefaults}`;
    }
  }),

  colorClass: computed('sprite', function() {
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

  sizeClass: computed('size', function() {
    const size = this.get('size');

    return size === 'medium' ? '' : ` slds-icon--${size}`;
  })
});
