import { find, findAll } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-icon-waffle', 'Integration | Component | slds icon waffle', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-icon-waffle}}`);

  assert.equal(findAll('.slds-icon-waffle').length, 1);
  assert.notOk(find('button').getAttribute('title'), 'should not have title');
  assert.notOk(findAll('span.slds-assistive-text').length, 'should not have assistive text');
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-icon-waffle title='amazing title'}}`);

  assert.equal(find('button').getAttribute('title'), 'amazing title');
  assert.equal(find('span.slds-assistive-text').textContent.trim(), 'amazing title');
});
