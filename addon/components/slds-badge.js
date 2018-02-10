import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/slds-badge';

const colorMap = {
  lightest: 'slds-badge_lightest',
  inverse: 'slds-badge_inverse'
};

export default Component.extend({
  layout,
  tagName: 'span',
  classNames: 'slds-badge',
  classNameBindings: ['colorClass'],
  text: 'badge',

  colorClass: computed('color', function() {
    const color = this.get('color');
    return colorMap[color];
  })
});
