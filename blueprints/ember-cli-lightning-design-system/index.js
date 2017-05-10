/* eslint-env node */
module.exports = {
  name: 'ember-cli-lightning-design-system',
  description: 'Configure ember-cli-lightning-design-system',

  normalizeEntityName() {}, // no-op since we're just adding dependencies

  afterInstall() {
    return this.addAddonsToProject({
      packages: [{ name: 'ember-cli-sass' }]
    }).then(() => {
      // Add npm packages to package.json
      return this.addPackagesToProject([{ name: '@salesforce-ux/design-system' }]);
    });
  }
};
