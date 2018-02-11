import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-tabs/item', 'Integration | Component | slds tabs/item', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-tabs/item text='Tab Text'}}`);

  assert.ok(this.$('li.slds-tabs_default__item').length, 'Tab Text');
  assert.ok(this.$('li.slds-tabs_default__item[role=presentation]').length, 'has role');
  assert.ok(this.$("li.slds-tabs_default__item[title='Tab Text']").length, 'has title');
  assert.equal(
    this.$('li.slds-tabs_default__item a.slds-tabs_default__link')
      .text()
      .trim(),
    'Tab Text'
  );
});
