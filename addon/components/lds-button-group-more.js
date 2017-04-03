import Ember from 'ember';
import layout from '../templates/components/lds-button-group-more';

export default Ember.Component.extend({
  layout,
  tagName: '',
  open: false,

  openClass: Ember.computed('open', function() {
    const open = this.get('open');
    return open 
      ? ' slds-is-open'
      : '';
  }),

  actions: {
    toggleOpen() {
      this.toggleProperty('open');
    },

    clicked(itemClickAction) {
      this.set('open', false);
      itemClickAction();
    }
  }  
});
