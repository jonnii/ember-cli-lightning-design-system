import { find } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-tabs/nav', 'Integration | Component | slds tabs/nav', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-tabs/nav}}`);

  assert.equal(find('*').textContent.trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#slds-tabs/nav}}
      template block text
    {{/slds-tabs/nav}}
  `);

  assert.equal(find('*').textContent.trim(), 'template block text');
});
