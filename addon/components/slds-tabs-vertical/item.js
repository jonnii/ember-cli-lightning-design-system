import Component from '@ember/component';
import layout from '../../templates/components/slds-tabs-vertical/item';
import { get } from '@ember/object';
import { readOnly } from '@ember/object/computed';

export default Component.extend({
  layout,
  tagName: 'li',
  isActive: false,
  classNames: 'slds-vertical-tabs__nav-item',
  classNameBindings: ['isActive:slds-is-active'],
  attributeBindings: ['role', 'title'],

  role: 'presentation',
  title: readOnly('text'),

  actions: {
    onTabClicked() {
      const handler = get(this, 'clicked');
      if (handler) {
        const title = get(this, 'title');
        handler(title);
      }
    }
  }
});
