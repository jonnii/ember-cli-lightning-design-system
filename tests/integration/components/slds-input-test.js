import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-input', 'Integration | Component | slds input', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-input label='some label'}}`);
  assert.expect(0);
  // assert.equal(this.$('label').attr('for'), this.$('input').attr('id'));
  // assert.equal(this.$('label').text().trim(), 'some label');
  // assert.equal(this.$('input').attr('type'), 'text');
  // assert.notOk(this.$('input').attr('placeholder'));
});

// test('it renders with placeholder', function(assert) {
//   this.render(hbs`{{slds-input label='some label' placeholder='awesome placeholder'}}`);

//   assert.equal(this.$('input').attr('placeholder'), 'awesome placeholder');
// });
