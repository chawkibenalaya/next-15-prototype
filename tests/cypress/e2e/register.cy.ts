/// <reference types="cypress" />

describe('Parcours inscription depuis la home page', () => {
  it('should navigate to register page and register successfully', () => {
    // Intercepter la requête avant la visite
    cy.intercept('POST', '**/auth/register', {
      statusCode: 200,
      body: {
        token: 'fake-jwt-token',
        refreshToken: 'fake-refresh-token',
        id: 1,
        email: 'john.doe@example.com',
        username: 'johndoe123',
        firstName: 'John',
        lastName: 'Doe',
      },
    }).as('registerRequest');

    // Aller sur la page d'accueil
    cy.visit('/');

    // Trouver et cliquer sur le bouton "Ouvrir un compte"
    cy.get('button[name="btn_ouvrir_un_compte"]').click();

    // Vérifier la redirection vers /auth/register
    cy.url().should('include', '/auth/register');
    cy.contains('Register'); // vérifier que le formulaire est bien affiché

    // Remplir le formulaire
    cy.get('input[name="firstName"]').type('John');
    cy.get('input[name="lastName"]').type('Doe');
    cy.get('input[name="username"]').type('johndoe123');
    cy.get('input[name="email"]').type('john.doe@example.com');
    cy.get('input[name="password"]').type('Password123!');

    // Soumettre
    cy.get('form').submit();

    // Attendre que la requête parte et vérifier la redirection
    cy.wait('@registerRequest');
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });
});


describe('Parcours inscription - cas utilisateur déjà existant', () => {
  it('should show error if user already exists', () => {
    // Interception de la requête avec une réponse 400
    cy.intercept('POST', '**/auth/register', {
      statusCode: 400,
      body: 'Email already exists',
    }).as('registerError');

    // Aller sur la page d'accueil
    cy.visit('/');

    // Cliquer sur le bouton "Ouvrir un compte"
    cy.get('button[name="btn_ouvrir_un_compte"]').click();

    // Vérifier qu'on est bien redirigé
    cy.url().should('include', '/auth/register');
    cy.contains('Register');

    // Remplir le formulaire avec un utilisateur déjà existant
    cy.get('input[name="firstName"]').type('Jane');
    cy.get('input[name="lastName"]').type('Smith');
    cy.get('input[name="username"]').type('janesmith');
    cy.get('input[name="email"]').type('jane@example.com');
    cy.get('input[name="password"]').type('ExistingUser123!');

    // Soumettre le formulaire
    cy.get('form').submit();

    // Attendre l’interception et vérifier le message d’erreur
    cy.wait('@registerError');
    cy.get('p.text-red-500').should('contain', 'Email already exists');
  });
});

