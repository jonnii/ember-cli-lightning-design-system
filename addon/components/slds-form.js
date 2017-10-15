import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/slds-form';

const typeMap = {
  stacked: 'slds-form_stacked',
  horizontal: 'slds-form_horizontal'
};

export default Component.extend({
  layout,

  classNames: ['slds-form'],
  classNameBindings: ['typeClass'],

  type: 'stacked',

  typeClass: computed('type', function() {
    const type = this.get('type');
    return typeMap[type];
  })
});
