import Ember from 'ember';
import layout from '../templates/components/slds-form';

const typeMap = {
  stacked: 'slds-form_stacked',
  horizontal: 'slds-form_horizontal'
};

export default Ember.Component.extend({
  layout,

  classNames: ['slds-form'],
  classNameBindings: ['typeClass'],

  type: 'stacked',

  typeClass: Ember.computed('type', function() {
    const type = this.get('type');
    return typeMap[type];
  })
});
