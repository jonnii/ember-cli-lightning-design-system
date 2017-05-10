import Ember from 'ember';
import layout from '../templates/components/slds-media';

const alignmentMap = {
  top: '',
  center: 'slds-media--center'
};

export default Ember.Component.extend({
  layout,

  classNames: ['slds-media'],
  classNameBindings: ['alignmentClass'],

  alignment: 'top',

  alignmentClass: Ember.computed('alignment', function() {
    return alignmentMap[this.get('alignment')];
  })
});
