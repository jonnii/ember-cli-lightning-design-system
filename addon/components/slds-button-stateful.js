import Ember from 'ember';
import layout from '../templates/components/slds-button-stateful';

export default Ember.Component.extend({
  layout,
  tagName: '',
  isSelected: false,

  notSelected: 'Select',
  selected: 'Selected',
  selectedFocus: 'Unselect',

  onChanged: null,

  state: Ember.computed('isSelected', function() {
    const isSelected = this.get('isSelected');
    return isSelected ? 'is-selected' : 'not-selected';
  }),

  actions: {
    pressed() {
      let func = this.get('onChanged');
      if (func) {
        func();
      } else {
        this.toggleProperty('isSelected');
      }
    }
  }
});
