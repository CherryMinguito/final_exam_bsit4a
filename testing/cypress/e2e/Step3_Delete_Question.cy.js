const url = "http://localhost:3000/question";

describe('Check Question Delete from Database', () => {
    //Visit The URL and Check Table if it has Data
    it('Test Data Insert', () => {
        cy.visit(url);
        //Assert Url
        cy.url().should('eq', url);

        cy.get('#MongoTable').should('length', 1);

        let fname = 'Pamela1';
        let lname = 'Tanedo2';

        cy.fixture('SampleQuestion.json').then((data) => {
            //Check if Question is the same as Sample Data Updated Value
            cy.get('#MongoTable > tbody > tr').last().find('td').first().should('have.text', data.Question  + ' P.S. Additional');

            //Click Delete Button
            cy.get('#MongoTable > tbody > tr').last().find('td').last().find('button').first().click();

            cy.wait(2000);

            //Recheck if Data is Question is Gone
            cy.get('#MongoTable > tbody > tr').last().find('td').first().should('not.have.text', data.Question  + ' P.S. Additional');

        });

    });
});