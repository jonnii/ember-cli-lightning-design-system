import { find } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-card/table', 'Integration | Component | slds card/table', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{slds-card/table}}`);

  assert.equal(find('*').textContent.trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#slds-card/table}}
      template block text
    {{/slds-card/table}}
  `);

  assert.equal(find('*').textContent.trim(), 'template block text');
});
