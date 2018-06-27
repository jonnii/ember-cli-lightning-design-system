import { guidFor } from '@ember/object/internals';
import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/slds-section';

export default Component.extend({
  layout,
  classNames: ['slds-section'],
  classNameBindings: ['isOpen:slds-is-open', 'isCollapsable::slds-is-open'],

  isCollapsable: true,

  sectionId: computed(function() {
    return guidFor(this);
  }),

  isHidden: computed('isOpen', function() {
    return this.isCollapsable && !this.isOpen;
  })
});
