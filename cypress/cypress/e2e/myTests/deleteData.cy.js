const url = "http://localhost:3000/student";

describe('Check Local API', () => {

  //Visit The URL and Check Table if it has Data
  it('Test Data Insert', () => {
      cy.visit(url);

      //Assert Url
      cy.url().should('eq', url);

      cy.get('#tableQuestionnaire').should('length', 1);

      let question = 'What does CTU mean?';

      cy.get('#tableQuestionnaire > tbody > tr').last().find('td').first().find('span').first().should('have.text', question);

      cy.get('#tableQuestionnaire > tbody > tr').last().find('td').last().find('button').last().click();

      cy.get('#tableQuestionnaire > tbody > tr').last().find('td').first().find('span').first().should('not.have.text',question);
  });
});
