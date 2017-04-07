import Ember from 'ember';
import layout from '../templates/components/lds-navigation-bar-item';

export default Ember.Component.extend({
  layout,
  tagName: '',
  defaultText: 'Menu Item',

  textWithDefault: Ember.computed.or('text', 'defaultText'),
  titleWithDefault: Ember.computed.or('title', 'text')
});
