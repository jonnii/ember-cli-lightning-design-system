import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/slds-toast';

const themeMap = {
  info: 'slds-theme_info',
  success: 'slds-theme_success',
  warning: 'slds-theme_warning',
  error: 'slds-theme_error'
};

export default Component.extend({
  layout,

  classNames: ['slds-notify', 'slds-notify_toast'],
  classNameBindings: ['themeClass'],
  attributeBindings: ['role:role'],

  role: 'alert',
  theme: 'info',

  themeClass: computed('theme', function() {
    const theme = this.get('theme');
    return themeMap[theme];
  })
});
