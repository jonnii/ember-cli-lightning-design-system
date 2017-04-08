import Ember from 'ember';
import layout from '../templates/components/slds-navigation-bar-menu';

export default Ember.Component.extend({
  layout,
  tagName: '',

  actions: {
    clicked(itemClickAction) {
      itemClickAction();
    }
  }
});
