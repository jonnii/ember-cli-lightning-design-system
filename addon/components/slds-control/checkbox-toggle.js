import Ember from 'ember';
import layout from '../../templates/components/slds-control/checkbox-toggle';

export default Ember.Component.extend({
  layout,
  tagName: 'label',
  classNames: ['slds-checkbox_toggle', 'slds-grid'],

  enabledText: 'Enabled',
  disabledText: 'Disabled'
});
