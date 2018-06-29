import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['tab'],
  tab: 'tab1',

  actions: {
    changeTab(tab) {
      this.set('tab', tab);
    }
  }
});
