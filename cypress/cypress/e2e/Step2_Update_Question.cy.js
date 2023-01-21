const url = "http://localhost:3000/question";

describe('Check Question Update To Database', () => {
    //Visit The URL and Check Table if it has Data
    it('Test Data Insert', () => {
        cy.visit(url);
        //Assert Url
        cy.url().should('eq', url);

        cy.get('#MongoTable').should('length', 1);


        cy.get('#MongoTable > tbody > tr').last().find('td').last().find('button').last().click();

        cy.fixture('SampleQuestion.json').then((data) => {
            //Check if Values Are the same as Sample Data
            cy.get('#Question').should('have.value', data.Question);
            cy.get('#ChoiceA').should('have.value', data.ChoiceA);
            cy.get('#ChoiceB').should('have.value', data.ChoiceB);
            cy.get('#RdChoice' + data.Answer).should('be.checked')


            //Change Values
            cy.get('#Question').type(' P.S. Additional', {force: true});
            cy.get('#ChoiceA').type(' P.S. Additional', {force: true});
            cy.get('#ChoiceB').type(' P.S. Additional', {force: true});
            cy.get('#RdChoice' + (data.Answer == "A" ? "B" : "A")).check();

            //Check if Values are the same as edited
            cy.get('#Question').should('have.value', data.Question  + ' P.S. Additional');
            cy.get('#ChoiceA').should('have.value', data.ChoiceA + ' P.S. Additional');
            cy.get('#ChoiceB').should('have.value', data.ChoiceB + ' P.S. Additional');
            cy.get('#RdChoice' + (data.Answer == "A" ? "B" : "A")).should('be.checked');

            cy.get('#UpdateBtn').click();
            
            cy.wait(2000);

            
            cy.get('#Question').should('be.empty');
            cy.get('#ChoiceA').should('be.empty');
            cy.get('#ChoiceB').should('be.empty');
            cy.get('#RdChoice' + (data.Answer == "A" ? "B" : "A")).should('not.be.checked');

            cy.get('#MongoTable > tbody > tr').last().find('td').first().should('have.text', data.Question  + ' P.S. Additional');
        });
    });
});