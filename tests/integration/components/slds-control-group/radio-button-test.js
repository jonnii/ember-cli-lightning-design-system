import { find } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-control-group/radio-button', 'Integration | Component | slds control group/radio button', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-control-group/radio-button label='option'}}`);

  assert.equal(find('.slds-radio_faux').textContent.trim(), 'option');
});
