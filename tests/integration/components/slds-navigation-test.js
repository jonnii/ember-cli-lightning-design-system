import { findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds navigation', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-navigation}}`);

    assert.ok(findAll('.slds-grid.slds-grid--vertical.slds-navigation-list--vertical').length);
  });

  test('it renders inverse', async function(assert) {
    await render(hbs`{{slds-navigation type='inverse'}}`);

    assert.ok(
      findAll('.slds-grid.slds-grid--vertical.slds-navigation-list--vertical.slds-navigation-list--vertical-inverse')
        .length
    );
  });
});
