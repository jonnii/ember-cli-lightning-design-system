import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    progress(message) {
      alert(message);
    }
  }
});
