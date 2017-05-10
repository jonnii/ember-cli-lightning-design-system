import Ember from 'ember';
import layout from '../templates/components/slds-navigation';

export default Ember.Component.extend({
  layout,

  classNames: ['slds-grid', 'slds-grid--vertical', 'slds-navigation-list--vertical'],
  classNameBindings: ['typeClass'],

  typeClass: Ember.computed('type', function() {
    const type = this.get('type');
    return type === 'inverse' ? 'slds-navigation-list--vertical-inverse' : '';
  })
});
