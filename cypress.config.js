const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: [
      "cypress/api/user/*.cy.js",
      "cypress/api/product/*.cy.js",
    ],
    baseUrl: "http://localhost:3000",

  },
});
