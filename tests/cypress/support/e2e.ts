/// <reference types="cypress" />

//  Si tu as un fichier pour les commandes personnalisées
import './commands';

//  Exemple : ignorer les erreurs uncaught
Cypress.on('uncaught:exception', (err, runnable) => {
  // Empêche les erreurs JS de casser les tests
  return false;
});
