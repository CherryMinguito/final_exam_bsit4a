const url = "http://localhost:3000/questionpage";

describe('Check Local API', () => {
    //Visit The URL and Check Table if it has Data
    it('Test Data Insert', () => {
        cy.visit(url);
        //Assert Url
        cy.url().should('eq', url);

        cy.get('#MyTable').should('length', 1);

        let question = 'What is the current year?';
        let choice = 'Choice 1: 2223 maybe?';


        cy.get('#MyTable > tr').last().find('td').first().find('span').first().should('have.text', question);
        cy.get('#MyTable > tr').last().find('td').eq(1).find('span').first().should('have.text', choice);


        cy.get('#MyTable > tr').last().find('td').last().find('button').last().click();

        cy.get('#MyTable > tr').last().find('td').first().find('span').first().should('not.have.text', question);
        cy.get('#MyTable > tr').last().find('td').eq(1).find('span').first().should('not.have.text', choice);
    });
});