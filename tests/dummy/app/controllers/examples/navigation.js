import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    spamMessage() {
      this.toggleProperty('isActive');
    }
  }
});
