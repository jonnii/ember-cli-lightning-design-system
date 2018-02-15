'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel'); // eslint-disable-line node/no-extraneous-require
const mergeTrees = require('broccoli-merge-trees'); // eslint-disable-line node/no-extraneous-require

module.exports = {
  name: 'ember-cli-lightning-design-system',

  treeForStyles() {
    let root = this.app.project.root;

    let stylePath = path.join(root, 'node_modules', '@salesforce-ux', 'design-system', 'scss');
    let styles = new Funnel(stylePath, {
      destDir: 'ember-cli-lightning-design-system/scss'
    });

    let designTokensPath = path.join(root, 'node_modules', '@salesforce-ux', 'design-system', 'design-tokens', 'dist');
    let designTokens = new Funnel(designTokensPath, {
      destDir: 'ember-cli-lightning-design-system/design-tokens/dist'
    });

    return mergeTrees([styles, designTokens]);
  },

  treeForPublic() {
    let root = this.app.project.root;

    let iconsPath = path.join(root, 'node_modules', '@salesforce-ux', 'design-system', 'assets', 'icons');
    let icons = new Funnel(iconsPath, {
      destDir: 'assets/icons'
    });

    let fontsPath = path.join(root, 'node_modules', '@salesforce-ux', 'design-system', 'assets', 'fonts');
    let fonts = new Funnel(fontsPath, {
      destDir: 'fonts'
    });

    let imagesPath = path.join(root, 'node_modules', '@salesforce-ux', 'design-system', 'assets', 'images');
    let images = new Funnel(imagesPath, {
      destDir: 'assets/images'
    });

    return mergeTrees([icons, fonts, images]);
  }
};
