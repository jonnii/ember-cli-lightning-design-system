import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-button-group', 'Integration | Component | lds button group', {
  integration: true
});

test('it renders with button group options', function(assert) {
  this.render(hbs`
    {{#lds-button-group as |group|}}
      {{group.button text='Option1'}}
      {{group.button text='Option2'}}
      {{group.button text='Option3'}}
    {{/lds-button-group}}
  `);

  assert.equal(this.$('button').length, 3);
});
