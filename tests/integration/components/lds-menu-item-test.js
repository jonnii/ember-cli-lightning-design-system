import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-menu-item', 'Integration | Component | lds menu item', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{lds-menu-item text='bob'}}`);

  assert.equal(this.$().text().trim(), 'bob');

  this.render(hbs`
    {{#lds-menu-item}}
      template block text
    {{/lds-menu-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
