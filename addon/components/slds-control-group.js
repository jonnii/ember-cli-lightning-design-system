import Ember from 'ember';
import layout from '../templates/components/slds-control-group';

export default Ember.Component.extend({
  layout,
  tagName: 'fieldset',
  classNames: 'slds-form-element',
  classNameBindings: ['isError:slds-has-error']
});
