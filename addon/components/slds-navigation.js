import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/slds-navigation';

export default Component.extend({
  layout,

  classNames: ['slds-grid', 'slds-grid--vertical', 'slds-navigation-list--vertical'],
  classNameBindings: ['typeClass'],

  typeClass: computed('type', function() {
    const type = this.get('type');
    return type === 'inverse' ? 'slds-navigation-list--vertical-inverse' : '';
  })
});
