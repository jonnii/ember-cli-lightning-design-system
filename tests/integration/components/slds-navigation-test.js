import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-navigation', 'Integration | Component | slds navigation', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-navigation}}`);

  assert.equal(this.$('.slds-navigation-list--vertical').attr('class'), 'slds-grid slds-grid--vertical slds-navigation-list--vertical ember-view');
});

test('it renders inverse', function(assert) {
  this.render(hbs`{{slds-navigation type='inverse'}}`);

  assert.equal(this.$('.slds-navigation-list--vertical').attr('class'), 'slds-grid slds-grid--vertical slds-navigation-list--vertical slds-navigation-list--vertical-inverse ember-view');
});
