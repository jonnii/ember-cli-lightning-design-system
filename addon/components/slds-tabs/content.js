import Component from '@ember/component';
import layout from '../../templates/components/slds-tabs/content';

export default Component.extend({
  layout,
  isScoped: false,
  classNameBindings: ['isScoped:slds-tabs_scoped__content:slds-tabs_default__content', 'isActive:slds-show:slds-hide'],
  attributeBindings: 'role',
  role: 'tabpanel'
});
