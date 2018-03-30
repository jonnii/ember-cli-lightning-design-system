'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const resolve = require('resolve');

module.exports = {
  name: 'ember-cli-lightning-design-system',

  included() {
    this._super.included.apply(this, arguments);

    let app = this._findHost.call(this);
    this.app = app;
  },

  treeForStyles() {
    let packagePath = resolve.sync('@salesforce-ux/design-system/package.json', {
      basedir: this.app.project.root
    });
    let root = path.dirname(packagePath);

    let stylePath = path.join(root, 'scss');
    let styles = new Funnel(stylePath, {
      destDir: 'ember-cli-lightning-design-system/scss'
    });

    let designTokensPath = path.join(root, 'design-tokens', 'dist');
    let designTokens = new Funnel(designTokensPath, {
      destDir: 'ember-cli-lightning-design-system/design-tokens/dist'
    });

    return mergeTrees([styles, designTokens]);
  },

  treeForPublic() {
    let packagePath = resolve.sync('@salesforce-ux/design-system/package.json', {
      basedir: this.app.project.root
    });
    let root = path.dirname(packagePath);

    let iconsPath = path.join(root, 'assets', 'icons');
    let icons = new Funnel(iconsPath, {
      destDir: 'assets/icons'
    });

    let fontsPath = path.join(root, 'assets', 'fonts');
    let fonts = new Funnel(fontsPath, {
      destDir: 'fonts'
    });

    let imagesPath = path.join(root, 'assets', 'images');
    let images = new Funnel(imagesPath, {
      destDir: 'assets/images'
    });

    return mergeTrees([icons, fonts, images]);
  }
};
