import { isEmpty } from '@ember/utils';
import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/slds-button';

const typeMap = {
  brand: 'slds-button--brand',
  success: 'slds-button--success',
  neutral: 'slds-button--neutral',
  destructive: 'slds-button--destructive',
  inverse: 'slds-button--inverse'
};

export default Component.extend({
  layout,
  tagName: 'button',

  classNames: ['slds-button'],
  classNameBindings: ['typeClass'],
  attributeBindings: ['disabled'],

  type: '',
  text: 'Submit',
  disabled: false,
  clicked: null,
  icon: null,
  iconPosition: 'left',

  typeClass: computed('type', function() {
    const type = this.get('type');

    if (isEmpty(type)) {
      return '';
    }

    return typeMap[type];
  }),

  shouldRenderLeftIcon: computed('icon', 'iconPosition', function() {
    const { icon, iconPosition } = this.getProperties('icon', 'iconPosition');

    if (isEmpty(icon)) {
      return false;
    }

    return iconPosition == 'left';
  }),

  shouldRenderRightIcon: computed('icon', 'iconPosition', function() {
    const { icon, iconPosition } = this.getProperties('icon', 'iconPosition');

    if (isEmpty(icon)) {
      return false;
    }

    return iconPosition == 'right';
  }),

  click() {
    const callback = this.get('clicked');

    if (callback) {
      callback();
    }
  },

  actions: {
    clicked() {
      const callback = this.get('clicked');

      if (callback) {
        callback();
      }
    }
  }
});
