import Component from '@ember/component';
import layout from '../../templates/components/slds-control-group/radio';

export default Component.extend({
  layout,

  classNames: 'slds-form-element__control',
  classNameBindings: ['isError:slds-has-error']
});
