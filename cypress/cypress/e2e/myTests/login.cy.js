const url = "http://localhost:3000/";

// eslint-disable-next-line no-undef
describe('Check Local API', () => {
    // Visit The URL and Check Table if it has Data
    it('Test Login', () => {
        cy.visit(url);
        // Assert Url
        cy.url().should('eq', url);

        cy.get('#Email').type('paulangelosoltero@gmail.com');
        cy.get('#Email').should('have.value', 'paulangelosoltero@gmail.com');
        cy.get('#Password').type('Password123.');
        cy.get('#Password').should('have.value', 'Password123.');

        cy.get("#Login").click();
        cy.url().should('eq', url + 'dashboard');
    });
});
