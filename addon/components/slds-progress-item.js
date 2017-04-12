import Ember from 'ember';
import layout from '../templates/components/slds-progress-item';

const stateMap = {
  'default': '',
  'active': 'slds-is-active',
  'completed': 'slds-is-completed',
  'error': 'slds-has-error'
};

const iconMap = {
  'completed': 'success',
  'error': 'warning'
};

export default Ember.Component.extend({
  layout,

  tagName: 'li',
  classNames: ['slds-progress__item'],
  classNameBindings: ['stateClass'],

  state: 'default',

  stateClass: Ember.computed('state', function() {
    const state = this.get('state');
    return stateMap[state];
  }),

  hasIcon: Ember.computed('state', function() {
    const state = this.get('state');
    return state == 'completed' || state == 'error';
  }),

  icon: Ember.computed('state', function() {
    const state = this.get('state');
    return iconMap[state];
  }),
});
