import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-navigation', 'Integration | Component | lds navigation', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{lds-navigation}}`);

  assert.equal(this.$('.slds-navigation-list--vertical').attr('class'), 'slds-grid slds-grid--vertical slds-navigation-list--vertical');
});

test('it renders inverse', function(assert) {
  this.render(hbs`{{lds-navigation type='inverse'}}`);

  assert.equal(this.$('.slds-navigation-list--vertical').attr('class'), 'slds-grid slds-grid--vertical slds-navigation-list--vertical slds-navigation-list--vertical-inverse');
});
