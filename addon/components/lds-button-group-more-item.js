import Ember from 'ember';
import layout from '../templates/components/lds-button-group-more-item';

export default Ember.Component.extend({
  layout,
  tagName: '',
  clicked: null,
  
  actions: {
    clicked() {
      const callback = this.get('_clicked');
      
      if(callback) { 
        callback(this.get('clicked'));
      }
    }
  }
});
