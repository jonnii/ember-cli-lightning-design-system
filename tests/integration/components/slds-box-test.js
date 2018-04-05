import { find } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-box', 'Integration | Component | slds box', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-box}}`);

  assert.equal(find('.slds-box').textContent.trim(), '');

  this.render(hbs`
    {{#slds-box}}
      template block text
    {{/slds-box}}
  `);

  assert.equal(find('.slds-box').textContent.trim(), 'template block text');
});
