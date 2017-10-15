import { or } from '@ember/object/computed';
import Component from '@ember/component';
import layout from '../../templates/components/slds-navigation-bar/item';

export default Component.extend({
  layout,
  tagName: '',
  defaultText: 'Menu Item',

  textWithDefault: or('text', 'defaultText'),
  titleWithDefault: or('title', 'text')
});
