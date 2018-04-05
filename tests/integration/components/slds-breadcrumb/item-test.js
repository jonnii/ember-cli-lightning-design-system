import { find } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-breadcrumb/item', 'Integration | Component | slds breadcrumb/item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{slds-breadcrumb/item}}`);

  assert.equal(find('.slds-breadcrumb__item').textContent.trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#slds-breadcrumb/item}}
      template block text
    {{/slds-breadcrumb/item}}
  `);

  assert.equal(find('.slds-breadcrumb__item').textContent.trim(), 'template block text');
});
