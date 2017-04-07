import Ember from 'ember';
import layout from '../templates/components/lds-navigation';

export default Ember.Component.extend({
  layout,
  tagName: '',
  
  typeClass: Ember.computed('type', function() {
    const type = this.get('type');
    return type === 'inverse' ? ' slds-navigation-list--vertical-inverse' : '';
  })

});
