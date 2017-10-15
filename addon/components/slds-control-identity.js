import { guidFor } from '@ember/object/internals';
import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/slds-control-identity';

export default Component.extend({
  layout,
  tagName: '',

  componentId: computed(function() {
    return guidFor(this);
  }),

  formElementId: computed('componentId', function() {
    let componentId = this.get('componentId');
    return `${componentId}-field`;
  }),

  errorElementId: computed('componentId', function() {
    let componentId = this.get('componentId');
    return `${componentId}-error`;
  })
});
