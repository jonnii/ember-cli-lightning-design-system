import Ember from 'ember';
import layout from '../../templates/components/slds-control-group/checkbox';
import identity from '../../mixins/control-identity';

export default Ember.Component.extend(identity, {
  layout,
  classNames: 'slds-form-element__control',
  classNameBindings: ['isError:slds-has-error']
});
