const url = "http://localhost:3000/Questionnaire";

describe('Delete a question', () => {
  beforeEach(() => {
    cy.visit(url);
  });

  it('deletes a question', () => {
    cy.get('.table tbody tr').first().find('.btnAction').contains('Delete').click();
    cy.get('.table tbody tr').should('have.length', 2);
  });
});
