import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/slds-progress-item';

const stateMap = {
  default: '',
  active: 'slds-is-active',
  completed: 'slds-is-completed',
  error: 'slds-has-error'
};

const iconMap = {
  completed: 'success',
  error: 'warning'
};

export default Component.extend({
  layout,

  tagName: 'li',
  classNames: ['slds-progress__item'],
  classNameBindings: ['stateClass'],

  state: 'default',

  stateClass: computed('state', function() {
    const state = this.get('state');
    return stateMap[state];
  }),

  hasIcon: computed('state', function() {
    const state = this.get('state');
    return state == 'completed' || state == 'error';
  }),

  icon: computed('state', function() {
    const state = this.get('state');
    return iconMap[state];
  })
});
