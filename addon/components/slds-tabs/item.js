import { get } from '@ember/object';
import { readOnly } from '@ember/object/computed';
import Component from '@ember/component';
import layout from '../../templates/components/slds-tabs/item';

export default Component.extend({
  layout,
  tagName: 'li',
  isActive: false,
  isScoped: false,
  classNameBindings: ['isScoped:slds-tabs_scoped__item:slds-tabs_default__item', 'isActive:slds-is-active'],
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
