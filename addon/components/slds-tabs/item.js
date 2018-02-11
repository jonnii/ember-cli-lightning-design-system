import { readOnly } from '@ember/object/computed';
import Component from '@ember/component';
import layout from '../../templates/components/slds-tabs/item';

export default Component.extend({
  //<li class="slds-tabs_default__item slds-is-active" title={{text}} role="presentation">
  layout,
  tagName: 'li',
  classNames: 'slds-tabs_default__item',
  attributeBindings: ['role', 'title'],

  role: 'presentation',
  title: readOnly('text')
});
