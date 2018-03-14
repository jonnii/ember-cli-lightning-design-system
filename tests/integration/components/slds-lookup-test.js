import { find } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-lookup', 'Integration | Component | slds lookup', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`
    {{#slds-lookup}}
    {{/slds-lookup}}
  `);

  assert.equal(find('label').textContent.trim(), 'Search');
  assert.equal(find('.slds-lookup').getAttribute('class'), 'slds-form-element slds-lookup');
});

test('it renders with placeholder', function(assert) {
  this.render(hbs`
    {{#slds-lookup placeholder='Find Product'}}
    {{/slds-lookup}}
  `);

  assert.equal(find('label').textContent.trim(), 'Find Product');
});

test('it renders with when open', function(assert) {
  this.render(hbs`
    {{#slds-lookup isOpen=true}}
    {{/slds-lookup}}
  `);

  assert.equal(find('.slds-lookup').getAttribute('class'), 'slds-form-element slds-lookup slds-is-open');
});
