const { defineConfig } = require('cypress');

module.exports = defineConfig({
	defaultCommandTimeout: 30000,
  	requestTimeout: 80000,
 	pageLoadTimeout: 80000,
	video: true,
	reporter: 'cypress-mochawesome-reporter',
	reporterOptions: {
		overwrite: true,
		json: true,
	},
	e2e: {
		baseUrl: 'https://dev-geon.aperam.com/app/',
		setupNodeEvents(on, config) {
			require('cypress-mochawesome-reporter/plugin')(on);
			// implement node event listeners here
		},
	},
});
