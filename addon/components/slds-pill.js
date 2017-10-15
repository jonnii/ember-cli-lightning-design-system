import Component from '@ember/component';
import layout from '../templates/components/slds-pill';

export default Component.extend({
  layout,

  tagName: 'span',
  classNames: ['slds-pill'],
  classNameBindings: ['isError:slds-has-error'],

  label: 'Label',
  isError: false
});
