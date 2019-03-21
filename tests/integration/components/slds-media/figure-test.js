import { findAll, find } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds media/figure', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      {{#slds-media/figure}}
        template block text
      {{/slds-media/figure}}
    `);

    assert.dom('.slds-media__figure').hasText('template block text');
  });

  test('it renders reverse', async function(assert) {
    await render(hbs`
      {{#slds-media/figure type='reverse'}}
        template block text
      {{/slds-media/figure}}
    `);

    assert.ok(findAll('.slds-media__figure.slds-media__figure--reverse').length);
  });
});
