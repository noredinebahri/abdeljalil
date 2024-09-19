describe('The Home Page', () => {
  it('should navigate to HomeComponent after successful Keycloak authentication', () => {
    cy.visit('/');
    cy.get('input[id="username"]').type('admin');
    cy.get('input[id="password"]').type('123456');
    cy.get('input[type="submit"]').click();
    cy.location('pathname').should('eq', '/');
    cy.contains('home works!').should('be.visible'); 
  });
  it('should not navigate to HomeComponent after invalid Keycloak authentication', () => {
    cy.visit('/');
    cy.get('input[id="username"]').type('admin');
    cy.get('input[id="password"]').type('123');
    cy.get('input[type="submit"]').click();
    cy.location('pathname').should('not.equal', '/').not;
  });
})