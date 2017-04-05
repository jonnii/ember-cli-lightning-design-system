import Ember from 'ember';
import layout from '../templates/components/lds-button-group-more-item';

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
