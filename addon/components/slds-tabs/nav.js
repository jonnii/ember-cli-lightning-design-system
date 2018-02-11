import Component from '@ember/component';
import layout from '../../templates/components/slds-tabs/nav';

export default Component.extend({
  //<ul class="slds-tabs_default__nav" role="tablist">
  layout,
  tagName: 'ul',
  classNames: 'slds-tabs_default__nav',
  attributeBindings: ['role'],
  role: 'tablist'
});
