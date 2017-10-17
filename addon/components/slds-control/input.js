import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../../templates/components/slds-control/input';

const iconMap = {
  none: '',
  left: 'slds-input-has-icon_left',
  right: 'slds-input-has-icon_right',
  leftRight: 'slds-input-has-icon_left-right'
};

export default Component.extend({
  layout,
  classNames: 'slds-form-element__control',
  classNameBindings: ['hasIcon:slds-input-has-icon', 'iconClass'],

  type: 'text',
  icon: 'none',

  hasIcon: computed('icon', function() {
    return this.get('icon') != 'none';
  }),

  iconClass: computed('icon', function() {
    return iconMap[this.get('icon')];
  })
});
