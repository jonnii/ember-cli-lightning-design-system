import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../../templates/components/slds-media/figure';

const typeMap = {
  default: '',
  reverse: 'slds-media__figure--reverse'
};

export default Component.extend({
  layout,

  classNames: ['slds-media__figure'],
  classNameBindings: ['typeClass'],

  type: 'default',

  typeClass: computed('type', function() {
    return typeMap[this.get('type')];
  })
});
