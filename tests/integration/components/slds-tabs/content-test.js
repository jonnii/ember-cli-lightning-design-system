import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-tabs/content', 'Integration | Component | slds tabs/content', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-tabs/content}}`);

  assert.ok(this.$('div.slds-tabs_default__content').length, 'has content');
  assert.ok(this.$('div.slds-tabs_default__content.slds-hide').length, 'is hidden');
  assert.ok(this.$('div.slds-tabs_default__content[role=tabpanel]').length, 'has role');

  this.render(hbs`
    {{#slds-tabs/content}}
      template block text
    {{/slds-tabs/content}}
  `);

  assert.equal(
    this.$()
      .text()
      .trim(),
    'template block text'
  );
});

test('it active', function(assert) {
  this.render(hbs`{{slds-tabs/content isActive=true}}`);

  assert.ok(this.$('div.slds-tabs_default__content.slds-show').length, 'is shown');
});
