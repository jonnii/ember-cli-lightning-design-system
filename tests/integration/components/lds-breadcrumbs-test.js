import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-breadcrumbs', 'Integration | Component | lds breadcrumbs', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{lds-breadcrumbs}}`);
  assert.equal(this.$().text().trim(), '');
});

test('it renders with crumb items', function(assert) {
  this.render(hbs`
    {{#lds-breadcrumbs as |crumb|}}
      {{#crumb.item}}Parent Entity{{/crumb.item}}
      {{#crumb.item}}Parent Record Name{{/crumb.item}}
    {{/lds-breadcrumbs}}`);

  assert.equal(this.$('.slds-breadcrumb__item:first').text().trim(), 'Parent Entity');
  assert.equal(this.$('.slds-breadcrumb__item:last').text().trim(), 'Parent Record Name');
});
