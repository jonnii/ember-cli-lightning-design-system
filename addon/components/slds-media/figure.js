import Ember from 'ember';
import layout from '../../templates/components/slds-media/figure';

const typeMap = {
  default: '',
  reverse: 'slds-media__figure--reverse'
};

export default Ember.Component.extend({
  layout,

  classNames: ['slds-media__figure'],
  classNameBindings: ['typeClass'],

  type: 'default',

  typeClass: Ember.computed('type', function() {
    return typeMap[this.get('type')];
  })
});
