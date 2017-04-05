import Ember from 'ember';
import layout from '../templates/components/lds-menu';

export default Ember.Component.extend({
  layout,
  tagName: '',
  isOpen: false,

  actions: {
    toggle() {
      this.toggleProperty('isOpen');
    }
  }
});
