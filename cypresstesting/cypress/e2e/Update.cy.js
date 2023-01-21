const url = "http://localhost:3000/question";

describe('Check Update', () => {
    it('Test Update', () => {
        cy.visit(url);
        cy.url().should('eq', url);
        cy.get('#MongoTable').should('length', 1);
        cy.get('#MongoTable > tbody > tr').last().find('td').last().find('button').first().click();

        cy.fixture('cypressquestion.json').then((data) => {
            cy.get('#Question').should('have.value', data.Question);
            cy.get('#ChoiceA').should('have.value', data.ChoiceA);
            cy.get('#ChoiceB').should('have.value', data.ChoiceB);
            //Test
            cy.get('#RdChoice' + data.Answer).should('be.checked')
            cy.get('#Question').type(' Update', {force: true});
            cy.get('#ChoiceA').type(' Update', {force: true});
            cy.get('#ChoiceB').type(' Update', {force: true});
            cy.get('#RdChoice' + (data.Answer == "A" ? "B" : "A")).check({force: true});
            //Test
            cy.get('#Question').should('have.value', data.Question  + ' Update');
            cy.get('#ChoiceA').should('have.value', data.ChoiceA + ' Update');
            cy.get('#ChoiceB').should('have.value', data.ChoiceB + ' Update');
            cy.get('#RdChoice' + (data.Answer == "A" ? "B" : "A")).should('be.checked');
            cy.get('#UpdateBtn').click({force: true});
            cy.wait(2000);
            //MonggoDB
            cy.get('#MongoTable > tbody > tr').last().find('td').first().should('have.text', data.Question  + ' Update');
        });
    });
});
