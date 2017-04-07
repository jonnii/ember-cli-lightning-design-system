import Ember from 'ember';
import layout from '../templates/components/lds-dropdown-item';

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
