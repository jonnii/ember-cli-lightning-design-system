import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';
import { A } from '@ember/array';
import layout from '../../templates/components/slds-control/select';

export default Component.extend({
  layout,

  classNames: ['slds-select_container'],

  prompt: 'Please select',

  selectableOptions: computed('selected', 'options', function() {
    var optionsWithDefault = this.options || A();

    if (Array.isArray(optionsWithDefault)) {
      return optionsWithDefault.map(option =>
        EmberObject.create({
          value: option,
          name: option,
          isSelected: option === this.selected
        })
      );
    }

    if (typeof optionsWithDefault === 'object') {
      return Object.keys(optionsWithDefault).map(key =>
        EmberObject.create({
          value: key,
          name: optionsWithDefault[key],
          isSelected: key === this.selected
        })
      );
    }

    return optionsWithDefault;
  }),

  actions: {
    selectedOptionChanged(item) {
      const handler = this.onSelected;

      if (handler) {
        handler(item);
      }
    }
  }
});
