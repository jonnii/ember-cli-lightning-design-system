import { guidFor } from '@ember/object/internals';
import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../../templates/components/slds-vertical-navigation/section';

export default Component.extend({
  layout,
  tagName: '',

  headerId: computed(function() {
    return guidFor(this);
  })
});
