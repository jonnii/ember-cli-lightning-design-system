import Ember from 'ember';
import layout from '../templates/components/slds-progress-bar';

export default Ember.Component.extend({
  layout,
  tagName: '',
  value: 0,

  progressStyle: Ember.computed('value', function() {
    const value = this.get('value');
    const parsed = parseInt(value, 10);
    return Ember.String.htmlSafe(`width:${parsed}%;`);
  })
});
