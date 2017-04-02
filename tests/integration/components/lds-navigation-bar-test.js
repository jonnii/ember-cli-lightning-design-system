import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-navigation-bar', 'Integration | Component | lds navigation bar', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{lds-navigation-bar}}`);

  assert.equal(this.$('.slds-context-bar__app-name').text().trim(), 'App Name');
});

test('it renders', function(assert) {
  this.render(hbs`{{lds-navigation-bar applicationName='Super App'}}`);

  assert.equal(this.$('.slds-context-bar__app-name').text().trim(), 'Super App');
});
