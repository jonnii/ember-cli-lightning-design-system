import Component from '@ember/component';
import layout from '../../templates/components/slds-tabs/content';

export default Component.extend({
  layout,
  classNames: 'slds-tabs_default__content',
  classNameBindings: ['isActive:slds-show:slds-hide'],
  attributeBindings: 'role',
  role: 'tabpanel'
});
