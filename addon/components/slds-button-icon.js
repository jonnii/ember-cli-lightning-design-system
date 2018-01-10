import { computed } from '@ember/object';
import { or } from '@ember/object/computed';
import Component from '@ember/component';
import layout from '../templates/components/slds-button-icon';

const typeMappings = {
  default: 'slds-button--icon',
  error: 'slds-button--icon-error',
  inverse: 'slds-button--icon-inverse'
};

const borderMappings = {
  outline: 'slds-button--icon-border',
  filled: 'slds-button--icon-border-filled'
};

export default Component.extend({
  layout,
  tagName: 'button',
  classNames: ['slds-button'],
  classNameBindings: ['typeClass', 'borderClass', 'selectedClass', 'containerSizeClass'],
  attributeBindings: ['titleWithDefault:title', 'disabled', 'ariaHaspopup:aria-haspopup'],

  type: 'default',
  sprite: 'utility',
  icon: 'question',
  size: 'default',
  containerSize: 'default',
  border: 'none',
  titleWithDefault: or('title', 'icon'),

  clicked: null,

  typeClass: computed('type', function() {
    const type = this.get('type');
    return typeMappings[type];
  }),

  sizeClass: computed('size', function() {
    const size = this.get('size');
    if (size == 'default') {
      return '';
    }

    return ` slds-button__icon--${size}`;
  }),

  containerSizeClass: computed('containerSize', function() {
    const containerSize = this.get('containerSize');
    if (containerSize == 'default') {
      return '';
    }

    return `slds-button--icon-${containerSize}`;
  }),

  borderClass: computed('border', function() {
    const border = this.get('border');
    return border == 'none' ? '' : `${borderMappings[border]}`;
  }),

  selectedClass: computed('isSelected', function() {
    const isSelected = this.get('isSelected');
    return isSelected ? 'slds-is-selected' : '';
  }),

  click() {
    const callback = this.get('clicked');
    if (callback != null) {
      callback();
    }
  },

  actions: {
    clicked(handler) {
      if (handler != null) {
        handler();
      }
    }
  }
});
