import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-button-group-more', 'Integration | Component | lds button group more', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{lds-button-group-more}}`);
  assert.expect(0);
});

