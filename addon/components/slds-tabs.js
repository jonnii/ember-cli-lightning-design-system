import Component from '@ember/component';
import layout from '../templates/components/slds-tabs';

export default Component.extend({
  layout,
  classNameBindings: ['isScoped:slds-tabs_scoped:slds-tabs_default'],
  isScoped: false
});
