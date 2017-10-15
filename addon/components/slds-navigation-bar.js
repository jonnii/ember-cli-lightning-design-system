import Component from '@ember/component';
import layout from '../templates/components/slds-navigation-bar';

export default Component.extend({
  layout,
  applicationName: 'App Name',
  contextBarSecondaryComponent: 'slds-navigation-bar/context-bar-secondary'
});
