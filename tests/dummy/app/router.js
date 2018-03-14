import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('examples', function() {
    this.route('navigation');
    this.route('lookup');
    this.route('notification');
    this.route('navigation-bar');
    this.route('button');
    this.route('icon');
    this.route('breadcrumb');
    this.route('button-group');
    this.route('button-icon');
    this.route('menu');
    this.route('form');
    this.route('global-header');
    this.route('image');
    this.route('progress');
    this.route('popover');
    this.route('form-horizontal');
    this.route('form-controls');
    this.route('card');
    this.route('pill');
    this.route('process');
    this.route('modal');
    this.route('avatar');
    this.route('media');
    this.route('spinner');
    this.route('toast');
    this.route('alert');
    this.route('page-header');
    this.route('combobox');
    this.route('badge');
    this.route('data-table');
    this.route('tab');
    this.route('box');
  });
  this.route('samples', function() {
    this.route('filter-grid');
    this.route('form');
    this.route('demo');
    this.route('search-results');
    this.route('lookup');
  });
});

export default Router;
