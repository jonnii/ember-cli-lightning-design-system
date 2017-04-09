import Ember from 'ember';
import layout from '../templates/components/slds-lookup';

export default Ember.Component.extend({
  layout,
  tagName: '',
  placeholder: 'Search',
  prompt: 'Recent Items',

  openClass: Ember.computed('isOpen', function() {
    return this.get('isOpen') 
      ? ' slds-is-open' 
      : '';
  }),

  lookupElementId: Ember.computed(function(){
    let id = Ember.guidFor(this);
    return `global-search-${id}`;
  }),

  actions: {
    onFocusIn() {
      this.set('isOpen', true);
    },

    onFocusOut() {
      this.set('isOpen', false);
    }
  }
});
