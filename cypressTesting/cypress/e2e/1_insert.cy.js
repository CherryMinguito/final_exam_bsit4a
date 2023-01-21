const url = "http://localhost:3000/Questionnaire";

describe('Insert a question', () => {
  it('should insert a new question', () => {
    cy.visit(url);

    cy.get('.btnAdd').click();

    cy.get('#text').type('What is the capital of France?');
    cy.get('#answer').type('Paris');
    cy.get('#choices').type('Paris, Rome, Berlin');

    cy.get('#btnSave').click();

    cy.get('.tablerows').should('contain', 'What is the capital of France?');
    cy.get('.tablerows').should('contain', 'Paris');
    cy.get('.tablerows').should('contain', 'Paris, Rome, Berlin');
  })
})
