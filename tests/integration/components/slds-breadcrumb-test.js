import { find, findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds breadcrumb', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-breadcrumb}}`);
    assert.equal(find('nav').textContent.trim(), '');
  });

  test('it renders with crumb items', async function(assert) {
    await render(hbs`
      {{#slds-breadcrumb as |crumb|}}
        {{#crumb.item}}Parent Entity{{/crumb.item}}
        {{#crumb.item}}Parent Record Name{{/crumb.item}}
      {{/slds-breadcrumb}}`);

    var nodes = findAll('.slds-breadcrumb__item');

    assert.equal(
      nodes[0]
        .textContent
        .trim(),
      'Parent Entity'
    );
    assert.equal(
      nodes[nodes.length - 1]
        .textContent
        .trim(),
      'Parent Record Name'
    );
  });
});
