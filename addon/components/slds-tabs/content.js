import Component from '@ember/component';
import layout from '../../templates/components/slds-tabs/content';

//<div id="tab-default-1" role="tabpanel" aria-labelledby="tab-default-1__item">
export default Component.extend({
  layout,
  classNames: 'slds-tabs_default__content',
  classNameBindings: ['isActive:slds-show:slds-hide'],
  attributeBindings: 'role',
  role: 'tabpanel'
});
