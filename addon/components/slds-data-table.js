import Component from '@ember/component';
import layout from '../templates/components/slds-data-table';

//<table class="slds-table slds-table_bordered slds-table_cell-buffer">

export default Component.extend({
  layout,
  tagName: 'table',
  classNames: ['slds-table'],
  classNameBindings: ['bordered:slds-table_bordered', 'cellBuffer:slds-table_cell-buffer', 'striped:slds-table_striped']
});
