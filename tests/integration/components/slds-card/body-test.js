import { find } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-card/body', 'Integration | Component | slds card/body', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{slds-card/body}}`);

  assert.equal(find('*').textContent.trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#slds-card/body}}
      template block text
    {{/slds-card/body}}
  `);

  assert.equal(find('*').textContent.trim(), 'template block text');
});
