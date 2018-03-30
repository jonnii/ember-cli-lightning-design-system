import { find } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-dropdown-header', 'Integration | Component | slds dropdown header', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-dropdown-header}}`);

  assert.equal(find('*').textContent.trim(), '');

  this.render(hbs`
    {{#slds-dropdown-header}}
      template block text
    {{/slds-dropdown-header}}
  `);

  assert.equal(find('*').textContent.trim(), 'template block text');
});
