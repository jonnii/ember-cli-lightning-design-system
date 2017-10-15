import Component from '@ember/component';
import layout from '../../templates/components/slds-navigation-bar/menu';

export default Component.extend({
  layout,
  tagName: '',

  actions: {
    clicked(itemClickAction) {
      itemClickAction();
    }
  }
});
