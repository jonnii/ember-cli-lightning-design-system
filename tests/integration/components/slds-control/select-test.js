import { fillIn, findAll, find } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds-control/select', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with options array', async function(assert) {
    this.set('names', ['bob', 'jeff']);

    await render(hbs`{{slds-control/select
      options=names
    }}`);

    assert.ok(find('.slds-select_container'));
    assert.equal(findAll('select option').length, 3);
    assert.equal(find('select option[value=bob]').textContent.trim(), 'bob');
  });

  test('it renders with options hash', async function(assert) {
    await render(hbs`{{slds-control/select
      options=(hash 3='bob' 4='jeff' 5='tim')
    }}`);

    assert.equal(findAll('select option').length, 4);
    assert.equal(find("select option[value='5']").textContent.trim(), 'tim');
  });

  test('it renders with selected item', async function(assert) {
    this.set('names', ['alice', 'bob', 'jeff']);

    await render(hbs`{{slds-control/select
      options=names
      selected='bob'
    }}`);

    assert.equal(find('option:checked').textContent.trim(), 'bob');
  });

  test('it reacts to selecting an item', async function(assert) {
    assert.expect(1);

    this.set('chooseItem', function(val) {
      assert.equal(val, 'bob');
    });

    this.set('names', ['bob', 'jeff']);

    await render(hbs`{{slds-control/select
      options=names
      onSelected=chooseItem
    }}`);

    await fillIn('select', 'bob');
  });
});
