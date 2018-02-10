import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-badge', 'Integration | Component | slds badge', {
  integration: true
});

test('it renders without text', function(assert) {
  this.render(hbs`{{slds-badge}}`);
  assert.equal(
    this.$()
      .text()
      .trim(),
    'badge'
  );
});

test('it renders with text attribute', function(assert) {
  this.render(hbs`{{slds-badge text='textytext'}}`);
  assert.equal(
    this.$()
      .text()
      .trim(),
    'textytext'
  );
});

test('it renders with color', function(assert) {
  this.render(hbs`{{slds-badge text='textytext' color='inverse'}}`);
  assert.ok(this.$('span.slds-badge_inverse').length);
});

test('it renders with block', function(assert) {
  this.render(hbs`
    {{#slds-badge}}
      i love blocks
    {{/slds-badge}}
  `);

  assert.ok(this.$('span.slds-badge').length);

  assert.equal(
    this.$()
      .text()
      .trim(),
    'i love blocks'
  );
});
