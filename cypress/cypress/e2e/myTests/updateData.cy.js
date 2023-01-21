const url = "http://localhost:3000/student";

describe('Check Local API', () => {
    //Visit The URL and Check Table if it has Data
    it('Test Data Insert', () => {
        cy.visit(url);
        //Assert Url
        cy.url().should('eq', url);

        cy.get('#tableQuestionnaire').should('length', 1);



        cy.get('#tableQuestionnaire > tbody > tr').last().find('td').last().find('button').first().click();

        cy.get('#tableQuestionnaire > tbody > tr').last().find('td').first().find('input').first().should('have.value', 'What does CTU mean?');
        cy.get('#tableQuestionnaire > tbody > tr').last().find('td').first().find('input').first().type('s');
        cy.get('#tableQuestionnaire > tbody > tr').last().find('td').first().find('input').first().should('have.value','What does CTU mean?s');

        cy.get('#btnUpdate').click();

        cy.wait(2000);

        cy.get('#tableQuestionnaire > tbody > tr').last().find('td').first().find('span').first().should('have.text', 'What does CTU mean?s');


    });
});
