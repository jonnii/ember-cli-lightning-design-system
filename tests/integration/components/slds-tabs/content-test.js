import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-tabs/content', 'Integration | Component | slds tabs/content', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-tabs/content}}`);

  assert.equal(
    this.$()
      .text()
      .trim(),
    ''
  );

  // Template block usage:
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
