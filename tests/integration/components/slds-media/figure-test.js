import { findAll, find } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-media/figure', 'Integration | Component | slds media/figure', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`
    {{#slds-media/figure}}
      template block text
    {{/slds-media/figure}}
  `);

  assert.equal(find('*').textContent.trim(), 'template block text');
});

test('it renders reverse', function(assert) {
  this.render(hbs`
    {{#slds-media/figure type='reverse'}}
      template block text
    {{/slds-media/figure}}
  `);

  assert.ok(findAll('.slds-media__figure.slds-media__figure--reverse').length);
});
