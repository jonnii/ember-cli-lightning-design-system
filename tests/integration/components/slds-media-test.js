import { findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds media', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      {{#slds-media as |media|}}
        {{#media.figure}}figure{{/media.figure}}
        {{#media.body}}body{{/media.body}}
      {{/slds-media}}
    `);

    assert.dom('.slds-media__figure').hasText('figure');
    assert.dom('.slds-media__body').hasText('body');
  });

  test('it renders centered', async function(assert) {
    await render(hbs`
      {{#slds-media alignment='center' as |media|}}
        {{#media.figure}}figure{{/media.figure}}
        {{#media.body}}body{{/media.body}}
      {{/slds-media}}
    `);

    assert.ok(findAll('.slds-media.slds-media--center').length);
  });
});
