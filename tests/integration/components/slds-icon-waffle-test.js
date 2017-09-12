import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-icon-waffle', 'Integration | Component | slds icon waffle', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-icon-waffle}}`);

  assert.equal(this.$('.slds-icon-waffle').length, 1);
  assert.notOk(this.$('button').attr('title'), 'should not have title');
  assert.notOk(this.$('span.slds-assistive-text').length, 'should not have assistive text');
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-icon-waffle title='amazing title'}}`);

  assert.equal(this.$('button').attr('title'), 'amazing title');
  assert.equal(
    this.$('span.slds-assistive-text')
      .text()
      .trim(),
    'amazing title'
  );
});
