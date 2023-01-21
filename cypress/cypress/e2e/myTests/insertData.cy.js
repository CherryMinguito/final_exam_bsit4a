const url = "http://localhost:3000/student";

describe('Check Local API', () => {
    //Visit The URL and Check Table if it has Data
    it('Test Data Insert', () => {
        cy.visit(url);
        //Assert Url
        cy.url().should('eq', url);

        cy.get('#tableQuestionnaire').should('length', 1);

        cy.fixture('user.json').then((data) => {

            cy.get('#Question').type(data.question);
            cy.get('#Question').should('have.value', data.question);

            cy.get('#A').type(data.choiceA);
            cy.get('#A').should('have.value', data.choiceA);

            cy.get('#B').type(data.choiceB);
            cy.get('#B').should('have.value', data.choiceB);

            cy.get('#C').type(data.choiceC);
            cy.get('#C').should('have.value', data.choiceC);

            cy.get('#Answer').type(data.answer);
            cy.get('#Answer').should('have.value', data.answer);

            cy.get('#btnAdd').click();

            cy.wait(2000);

            cy.get('#Question').should('be.empty');
            cy.get('#A').should('be.empty');
            cy.get('#B').should('be.empty');
            cy.get('#C').should('be.empty');
            cy.get('#Answer').should('be.empty');

            cy.get('#tableQuestionnaire > tbody > tr').last().find('td').first().find('span').first().should('have.text', data.question);
        });


    });
});
