import { findAll, find } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds-control/select', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with options array', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('names', ['bob', 'jeff']);

    await render(hbs`{{slds-control/select
      options=names
    }}`);

    assert.ok(find('.slds-select_container'));
    assert.equal(findAll('select option').length, 3);
    assert.equal(find('select option[value=bob]').textContent.trim(), 'bob');
  });

  test('it renders with options hash', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{slds-control/select
      options=(hash 3='bob' 4='jeff' 5='tim')
    }}`);

    assert.equal(findAll('select option').length, 4);
    assert.equal(find("select option[value='5']").textContent.trim(), 'tim');
  });
});
