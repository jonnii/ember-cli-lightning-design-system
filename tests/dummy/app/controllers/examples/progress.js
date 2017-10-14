import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    progress(message) {
      alert(message);
    }
  }
});
