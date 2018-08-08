import Component from '@ember/component';
import layout from '../../templates/components/slds-tabs-vertical/content';

export default Component.extend({
  layout,
  classNames: 'slds-vertical-tabs__content',
  classNameBindings: ['isActive:slds-show:slds-hide'],
  attributeBindings: 'role',
  role: 'tabpanel'
});
