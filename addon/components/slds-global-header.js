import Component from '@ember/component';
import layout from '../templates/components/slds-global-header';

export default Component.extend({
  layout,
  tagName: 'header',

  classNames: ['slds-global-header_container']
});
