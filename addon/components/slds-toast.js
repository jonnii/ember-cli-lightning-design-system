import Ember from 'ember';
import layout from '../templates/components/slds-toast';

export default Ember.Component.extend({
  layout,

  classNames: ['slds-notify', 'slds-notify_toast', 'slds-theme_info'],
  attributeBindings: ['role:role'],

  role: 'alert'
});
