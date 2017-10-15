import { guidFor } from '@ember/object/internals';
import { isEmpty } from '@ember/utils';
import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/slds-lookup';

export default Component.extend({
  layout,
  tagName: '',
  placeholder: 'Search',
  prompt: 'Recent',

  hasQuery: computed('query', function() {
    const query = this.get('query');
    return !isEmpty(query);
  }),

  openClass: computed('isOpen', function() {
    return this.get('isOpen') ? ' slds-is-open' : '';
  }),

  lookupElementId: computed(function() {
    let id = guidFor(this);
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
