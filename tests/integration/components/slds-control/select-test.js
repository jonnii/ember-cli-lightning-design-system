import { fillIn, findAll, find } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

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

  test('it renders with models', async function(assert) {
    this.set('models', [EmberObject.create({ id: 3, name: 'bob' }), EmberObject.create({ id: 4, name: 'bob' })]);

    await render(hbs`{{slds-control/select
      options=models
    }}`);

    assert.equal(findAll('select option').length, 3);
    assert.equal(find("select option[value='4']").textContent.trim(), 'bob');
  });

  test('it renders with models (custom name/value paths)', async function(assert) {
    this.set('models', [
      EmberObject.create({ key: 3, firstName: 'bob' }),
      EmberObject.create({ key: 4, firstName: 'bob' })
    ]);

    await render(hbs`{{slds-control/select
      options=models
      valuePath='key'
      namePath='firstName'
    }}`);

    assert.equal(findAll('select option').length, 3);
    assert.equal(find("select option[value='4']").textContent.trim(), 'bob');
  });

  test('it renders with selected item', async function(assert) {
    this.set('names', ['alice', 'bob', 'jeff']);

    await render(hbs`{{slds-control/select
      options=names
      selected='bob'
    }}`);

    assert.equal(find('option:checked').textContent.trim(), 'bob');
  });

  test('it renders disabled', async function(assert) {
    this.set('names', ['alice', 'bob', 'jeff']);

    await render(hbs`{{slds-control/select
      options=names
      selected='bob'
      isDisabled=true
    }}`);

    assert.ok(find('select:disabled'));
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
