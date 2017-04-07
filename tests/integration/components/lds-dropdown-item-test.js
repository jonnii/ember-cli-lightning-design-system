import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-dropdown-item', 'Integration | Component | lds dropdown item', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{lds-dropdown-item text='bob'}}`);

  assert.equal(this.$().text().trim(), 'bob');

  this.render(hbs`
    {{#lds-dropdown-item}}
      template block text
    {{/lds-dropdown-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
