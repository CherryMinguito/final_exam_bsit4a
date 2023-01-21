const url = "http://localhost:3000/questionpage";

describe('Check Local API', () => {
  //Visit The URL and Check Table if it has Data
  it('Test Data Insert', () => {
      cy.visit(url);
      //Assert Url
      cy.url().should('eq', url);

      cy.get('#MyTable').should('length', 1);


      cy.get('#MyTable > tr').last().find('td').last().find('button').first().click();

      ///EDIT QUESTION
      cy.get('#MyTable > tr').last().find('td').first().find('input').first().should('have.value', 'What is the current year');
      cy.get('#MyTable > tr').last().find('td').first().find('input').first().type('?');
      cy.get('#MyTable > tr').last().find('td').first().find('input').first().should('have.value','What is the current year?');

      ///edit choice 1
      cy.get('#MyTable > tr').last().find('td').eq(1).find('input').first().should('have.value', '2223');
      cy.get('#MyTable > tr').last().find('td').eq(1).find('input').first().type(' maybe?');
      cy.get('#MyTable > tr').last().find('td').eq(1).find('input').first().should('have.value','2223 maybe?');

      ///edit choice 2
      //cy.get('#MyTable > tr').last().find('td').eq(1).find('input').first().should('have.value', '2020');
     // cy.get('#MyTable > tr').last().find('td').eq(1).find('input').first().type(' maybe');
      //cy.get('#MyTable > tr').last().find('td').eq(1).find('input').first().should('have.value','2020 maybe');

      ////edit choice 3
      //cy.get('#MyTable > tr').last().find('td').eq(1).find('input').first().should('have.value', '2023');
     // cy.get('#MyTable > tr').last().find('td').eq(1).find('input').first().type(' hmmm');
      //cy.get('#MyTable > tr').last().find('td').eq(1).find('input').first().should('have.value','2023 hmmm');

      cy.get('#MyTable > tr').last().find('td').last().find('button').first().click();
      cy.wait(2000);
      ////check updates
      cy.get('#MyTable > tr').last().find('td').first().find('span').first().should('have.text', 'What is the current year?');
      cy.get('#MyTable > tr').last().find('td').eq(1).find('span').first().should('have.text', 'Choice 1: 2223 maybe?');
     // cy.get('#MyTable > tr').last().find('td').eq(1).find('span').first().should('have.text', '2020 maybe');
     // cy.get('#MyTable > tr').last().find('td').eq(1).find('span').first().should('have.text', '2023 hmmm');


  });
});