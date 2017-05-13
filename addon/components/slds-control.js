import Ember from 'ember';
import layout from '../templates/components/slds-control';
import identity from '../mixins/control-identity';

export default Ember.Component.extend(identity, {
  layout,

  classNames: 'slds-form-element',
  classNameBindings: ['isError:slds-has-error']
});
