import Ember from 'ember';
import layout from '../templates/components/lds-menu-item';

export default Ember.Component.extend({
  layout,
  tagName: '',
  clicked: null,
  
  actions: {
    clicked(handler, next) {      
      if(handler) { 
        handler(next);
      }
    }
  }
});
