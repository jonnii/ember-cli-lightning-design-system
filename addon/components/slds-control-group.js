import Component from '@ember/component';
import layout from '../templates/components/slds-control-group';

export default Component.extend({
  layout,
  tagName: 'fieldset',
  classNames: 'slds-form-element',
  classNameBindings: ['isError:slds-has-error']
});
