import Component from '@ember/component';
import layout from '../../templates/components/slds-tabs-vertical/nav';

export default Component.extend({
  layout,
  tagName: 'ul',
  classNames: ['slds-vertical-tabs__nav'],
  attributeBindings: ['role', 'aria-orientation:ariaOrientation'],
  role: 'tablist',
  ariaOrientation: 'vertical'
});
