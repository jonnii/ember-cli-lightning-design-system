import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-icon', 'Integration | Component | lds icon', {
  integration: true
});

test('it renders default icon', function(assert) {
  this.render(hbs`{{lds-icon}}`);

  assert.equal(this.$('span.slds-icon_container').attr('class').trim(), 'slds-icon_container slds-icon-standard-default');
});
