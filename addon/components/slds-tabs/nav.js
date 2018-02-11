import Component from '@ember/component';
import layout from '../../templates/components/slds-tabs/nav';

export default Component.extend({
  layout,
  tagName: 'ul',
  classNames: 'slds-tabs_default__nav',
  attributeBindings: ['role'],
  role: 'tablist'
});
