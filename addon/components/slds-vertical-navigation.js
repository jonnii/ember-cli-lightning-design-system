import Component from '@ember/component';
import layout from '../templates/components/slds-vertical-navigation';

export default Component.extend({
  layout,

  tagName: 'nav',
  classNames: ['slds-nav-vertical'],
  classNameBindings: ['typeClass', 'isCompact:slds-nav-vertical_compact', 'isShaded:slds-nav-vertical_shade']
});
