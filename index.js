/* eslint-env node */
'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-lightning-design-system',

  treeForStyles() {
    let nodeModulesPath = this.app.project.nodeModulesPath;
    let stylePath = path.join(nodeModulesPath, '@salesforce-ux', 'design-system');
    
    return new Funnel(stylePath, {
      destDir: 'ember-cli-lightning-design-system'
    });
  },

  treeForPublic() {
    let nodeModulesPath = this.app.project.nodeModulesPath;
    let stylePath = path.join(nodeModulesPath, '@salesforce-ux', 'design-system', 'assets', 'icons');
    
    return new Funnel(stylePath, {
      destDir: 'assets/icons'
    });
  }
};
