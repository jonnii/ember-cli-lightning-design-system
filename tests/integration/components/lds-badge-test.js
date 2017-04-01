import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-badge', 'Integration | Component | lds badge', {
  integration: true
});

test('it renders without text', function(assert) {
  this.render(hbs`{{lds-badge}}`);
  assert.equal(this.$().text().trim(), 'badge');
});

test('it renders with text attribute', function(assert) {
  this.render(hbs`{{lds-badge text='textytext'}}`);
  assert.equal(this.$().text().trim(), 'textytext');
});

test('it renders with block', function(assert) {
  this.render(hbs`
    {{#lds-badge}}
      i love blocks
    {{/lds-badge}}
  `);

  assert.equal(this.$().text().trim(), 'i love blocks');
});
