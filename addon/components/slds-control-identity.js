import Ember from 'ember';
import layout from '../templates/components/slds-control-identity';

export default Ember.Component.extend({
  layout,
  tagName: '',

  formElementId: Ember.computed('elementId', function() {
    let elementId = this.get('elementId');
    return `${elementId}-field`;
  }),

  errorElementId: Ember.computed('elementId', function() {
    let elementId = this.get('elementId');
    return `${elementId}-error`;
  })
});
