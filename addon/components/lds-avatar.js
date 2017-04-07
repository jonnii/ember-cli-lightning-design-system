import Ember from 'ember';
import layout from '../templates/components/lds-avatar';

const typeMap = {
  'square': '',
  'circle': ' slds-avatar--circle'
}

export default Ember.Component.extend({
  layout,
  tagName: '',
  type: 'square',
  size: 'medium',
  sprite: 'standard',
  icon: 'account',

  typeClass: Ember.computed('type', function() {
    const type = this.get('type');
    return typeMap[type];
  }),

  shortName: Ember.computed('name', function() {
    const name = this.get('name');
    const bits = name.split(' ');
    if(bits.length >= 2) {
      const first = bits[0];
      const last = bits[bits.length - 1];
      return `${first[0]}${last[0]}`
    }
    else {
      return bits[0].substring(0, 2);
    }
  })
});
