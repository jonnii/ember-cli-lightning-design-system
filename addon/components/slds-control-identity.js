import Ember from 'ember';
import layout from '../templates/components/slds-control-identity';

export default Ember.Component.extend({
  layout,
  tagName: '',

  componentId: Ember.computed(function() {
    return Ember.guidFor(this);
  }),

  formElementId: Ember.computed('componentId', function() {
    let componentId = this.get('componentId');
    return `${componentId}-field`;
  }),

  errorElementId: Ember.computed('componentId', function() {
    let componentId = this.get('componentId');
    return `${componentId}-error`;
  })
});
