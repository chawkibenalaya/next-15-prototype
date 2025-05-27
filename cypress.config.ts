import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
    baseUrl: 'http://localhost:3000', // adapte si différent
    specPattern: 'tests/cypress/e2e/**/*.cy.{ts,js}',
    supportFile: false,
  },
});
