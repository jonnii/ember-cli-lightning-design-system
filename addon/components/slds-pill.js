import Ember from 'ember';
import layout from '../templates/components/slds-pill';

export default Ember.Component.extend({
  layout,

  tagName: 'span',
  classNames: ['slds-pill'],
  classNameBindings: ['isError:slds-has-error'],

  label: 'Label',
  isError: false
});
