import { findAll } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-path', 'Integration | Component | slds path', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-path}}`);

  assert.ok(findAll('.slds-path').length);
});
