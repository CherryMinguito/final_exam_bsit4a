const url = "http://localhost:3000/questionpage";

describe('Check Local API', () => {
    //Visit The URL and Check Table if it has Data
    it('Test Data Insert', () => {
        cy.visit(url);
        //Assert Url
        cy.url().should('eq', url);

        cy.get('#MyTable').should('length', 1);

        cy.fixture('questions.json').then((data) => {
            cy.get('#Question').type(data.question);
            cy.get('#Question').should('have.value', data.question);

            cy.get('#choice1').type(data.choice_1);
            cy.get('#choice1').should('have.value', data.choice_1);

            cy.get('#choice2').type(data.choice_2);
            cy.get('#choice2').should('have.value', data.choice_2);

            cy.get('#choice3').type(data.choice_3);
            cy.get('#choice3').should('have.value', data.choice_3);

            cy.get('#answer').type(data.answer);
            cy.get('#answer').should('have.value', data.answer);

            cy.get('#AddQuestion').click();

            cy.wait(2000);

            cy.get('#Question').should('be.empty');
            cy.get('#choice1').should('be.empty');
            cy.get('#choice2').should('be.empty');
            cy.get('#choice3').should('be.empty');
            cy.get('#answer').should('be.empty');

            cy.get('#MyTable > tr').last().find('td').first().find('span').first().should('have.text', data.question);

        });


    });
});