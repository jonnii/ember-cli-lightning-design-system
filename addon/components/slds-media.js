import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/slds-media';

const alignmentMap = {
  top: '',
  center: 'slds-media--center'
};

export default Component.extend({
  layout,

  classNames: ['slds-media'],
  classNameBindings: ['alignmentClass'],

  alignment: 'top',

  alignmentClass: computed('alignment', function() {
    return alignmentMap[this.get('alignment')];
  })
});
