import Ember from 'ember';
import layout from '../templates/components/slds-control';

export default Ember.Component.extend({
  layout,
  
  classNames: 'slds-form-element',
  classNameBindings: ['isError:slds-has-error'],

  formElementId: Ember.computed('elementId', function() {
    let elementId = this.get('elementId');
    return `${elementId}-field`;
  }),

  errorElementId: Ember.computed('elementId', function() {
    let elementId = this.get('elementId');
    return `${elementId}-error`;
  }),
});
