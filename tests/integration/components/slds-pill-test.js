import { find, findAll } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-pill', 'Integration | Component | slds pill', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-pill}}`);

  assert.ok(findAll('button.slds-pill__remove.slds-button.slds-button--icon').length);
  assert.equal(find('a').textContent.trim(), 'Label');
});

test('it renders with label', function(assert) {
  this.render(hbs`{{slds-pill label='awesome label'}}`);

  assert.ok(findAll('button.slds-pill__remove.slds-button.slds-button--icon').length);
  assert.equal(find('a').textContent.trim(), 'awesome label');
});

test('it renders with error', function(assert) {
  this.render(hbs`{{slds-pill isError=true}}`);

  assert.ok(findAll('.slds-pill.slds-has-error').length);
  assert.equal(
    find('.slds-icon_container').getAttribute('class'),
    'slds-icon_container slds-pill__icon_container slds-m-left--xx-small'
  );
});
