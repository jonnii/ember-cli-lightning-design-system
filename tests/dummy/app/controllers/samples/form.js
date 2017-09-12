import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  username: validator('presence', true)
});

export default Ember.Controller.extend(Validations, {
  username: null
});
