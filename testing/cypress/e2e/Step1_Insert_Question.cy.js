const url = "http://localhost:3000/question";

describe('Check Question INsert nTo Database', () => {
    //Visit The URL and Check Table if it has Data
    it('Testing Question Insert To Database', () => {
        cy.visit(url);
        //Assert Url
        cy.url().should('eq', url);

        cy.get('#MongoTable').should('length', 1);
//comment
        cy.fixture('SampleQuestion.json').then((data) => {
            cy.get('#Question').type(data.Question, {force: true});
            cy.get('#Question').should('have.value', data.Question);
            cy.get('#ChoiceA').type(data.ChoiceA, {force: true});
            cy.get('#ChoiceA').should('have.value', data.ChoiceA);
            cy.get('#ChoiceB').type(data.ChoiceB, {force: true});
            cy.get('#ChoiceB').should('have.value', data.ChoiceB);
            cy.get('#RdChoice' + data.Answer).check();
            cy.get('#RdChoice' + data.Answer).should('be.checked')

            cy.get('#InsertBtn').click();
            
            cy.wait(2000);

            
            cy.get('#Question').should('be.empty');
            cy.get('#ChoiceA').should('be.empty');
            cy.get('#ChoiceB').should('be.empty');
            cy.get('#RdChoice' + data.Answer).should('not.be.checked');

            cy.get('#MongoTable > tbody > tr').last().find('td').first().should('have.text', data.Question);
        });

        
    });
});