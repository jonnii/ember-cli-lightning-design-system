import { fillIn } from "@ember/test-helpers";
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

    assert.dom('.slds-select_container').exists();
    assert.dom('select option').exists({ count: 3 });
    assert.dom('select option[value=bob]').hasText('bob');
  });

  test('it renders with options hash', async function(assert) {
    await render(hbs`{{slds-control/select
      options=(hash 3='bob' 4='jeff' 5='tim')
    }}`);

    assert.dom('select option').exists({ count: 4 });
    assert.dom("select option[value='5']").hasText('tim');
  });

  test('it renders with selected item', async function(assert) {
    this.set('names', ['alice', 'bob', 'jeff']);

    await render(hbs`{{slds-control/select
      options=names
      selected='bob'
    }}`);

    assert.dom('option:checked').hasText('bob');
  });

  test('it renders disabled', async function(assert) {
    this.set('names', ['alice', 'bob', 'jeff']);

    await render(hbs`{{slds-control/select
      options=names
      selected='bob'
      isDisabled=true
    }}`);

    assert.dom('select').isDisabled();
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
