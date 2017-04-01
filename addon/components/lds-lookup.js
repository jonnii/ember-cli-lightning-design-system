import Ember from 'ember';
import layout from '../templates/components/lds-lookup';

export default Ember.Component.extend({
  layout,
  tagName: '',
  placeholder: 'Search',
  prompt: 'Recent Items',

  displayClass: Ember.computed('isShowingDropDown', function() {
    return this.get('isShowingDropDown') ? 'slds-is-open' : '';
  }),

  lookupElementId: Ember.computed(function(){
    let id = Ember.guidFor(this);
    return `global-search-${id}`;
  }),

  actions: {
    onFocusIn() {
      this.set('isShowingDropDown', true);
    },

    onFocusOut() {
      this.set('isShowingDropDown', false);
    }
  }
});
