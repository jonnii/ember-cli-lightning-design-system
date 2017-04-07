import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-dropdown-header', 'Integration | Component | lds dropdown header', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{lds-dropdown-header}}`);

  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#lds-dropdown-header}}
      template block text
    {{/lds-dropdown-header}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
