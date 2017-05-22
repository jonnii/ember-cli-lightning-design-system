import Ember from 'ember';
import layout from '../templates/components/slds-toast';

const themeMap = {
  info: 'slds-theme_info',
  success: 'slds-theme_success'
};

export default Ember.Component.extend({
  layout,

  classNames: ['slds-notify', 'slds-notify_toast'],
  classNameBindings: ['themeClass'],
  attributeBindings: ['role:role'],

  role: 'alert',
  theme: 'info',

  themeClass: Ember.computed('theme', function() {
    const theme = this.get('theme');
    return themeMap[theme];
  })
});
