import Ember from 'ember';
import layout from '../templates/components/slds-alert';

const themeMap = {
  info: 'slds-theme_info',
  error: 'slds-theme_error',
  warning: 'slds-theme_warning',
  offline: 'slds-theme_offline'
};

export default Ember.Component.extend({
  layout,

  classNames: ['slds-notify', 'slds-notify--alert', 'slds-theme--alert-texture'],
  classNameBindings: ['themeClass'],
  attributeBindings: ['role:role'],

  role: 'alert',
  theme: 'info',

  themeClass: Ember.computed('theme', function() {
    const theme = this.get('theme');
    return themeMap[theme];
  })
});
