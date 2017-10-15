import Component from '@ember/component';
import layout from '../templates/components/slds-control';

export default Component.extend({
  layout,

  classNames: 'slds-form-element',
  classNameBindings: ['isError:slds-has-error']
});
