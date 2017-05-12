import Ember from 'ember';
import layout from '../../templates/components/slds-control-group/checkbox';

export default Ember.Component.extend({
  layout,
  classNames: 'slds-form-element__control',
  classNameBindings: ['isError:slds-has-error'],

  formElementId: Ember.computed('elementId', function() {
    let elementId = this.get('elementId');
    return `${elementId}-field`;
  })
});
