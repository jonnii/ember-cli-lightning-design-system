import Ember from 'ember';
import layout from '../templates/components/lds-input';

export default Ember.Component.extend({
  layout,

  classNames: 'slds-form-element',

  formElementId: Ember.computed('elementId', function() {
    let elementId = this.get('elementId');
    return `${elementId}-field`;
  }),
});
