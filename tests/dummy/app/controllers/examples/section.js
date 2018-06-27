import Controller from '@ember/controller';

export default Controller.extend({
  isOpen: false,

  actions: {
    toggleOpen() {
      this.toggleProperty('isOpen');
    }
  }
});
