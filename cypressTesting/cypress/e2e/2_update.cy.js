const url = "http://localhost:3000/Questionnaire";

describe('Update a question', () => {
  it('should update an existing question', () => {
    cy.visit(url);

    cy.get('.tablerows').contains('What is the capital of France?').parent().find('.editQuestion').click();
    cy.get('#text').clear().type('What is the capital of Germany?');
    cy.get('#answer').clear().type('Berlin');
    cy.get('#choices').clear().type('Berlin, Rome, Paris');

    cy.get('#btnSave').click();

    cy.get('.tablerows').should('not.contain', 'What is the capital of France?');
    
    cy.get('.tablerows').should('contain', 'What is the capital of Germany?');
    cy.get('.tablerows').should('contain', 'Berlin');
    cy.get('.tablerows').should('contain', 'Berlin, Rome, Paris');
  })
})
