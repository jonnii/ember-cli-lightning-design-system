import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-dropdown-item', 'Integration | Component | slds dropdown item', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-dropdown-item text='bob'}}`);

  assert.equal(this.$().text().trim(), 'bob');

  this.render(hbs`
    {{#slds-dropdown-item}}
      template block text
    {{/slds-dropdown-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
