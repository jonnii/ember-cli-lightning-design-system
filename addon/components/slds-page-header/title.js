import Ember from 'ember';
import layout from '../../templates/components/slds-page-header/title';

export default Ember.Component.extend({
  layout,
  tagName: 'h1',
  classNames: ['slds-page-header__title']
});
