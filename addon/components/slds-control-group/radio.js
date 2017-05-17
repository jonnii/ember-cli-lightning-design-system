import Ember from 'ember';
import layout from '../../templates/components/slds-control-group/radio';

export default Ember.Component.extend({
  layout,

  classNames: 'slds-form-element__control',
  classNameBindings: ['isError:slds-has-error']
});
