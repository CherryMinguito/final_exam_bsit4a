const url = "http://localhost:3000/question";

describe('Check Delete', () => {
    it('Test Delete', () => {
        cy.visit(url);
        cy.url().should('eq', url);
        cy.get('#MongoTable').should('length', 1);

        let fname = 'Pamela1';
        let lname = 'Tanedo2';

        cy.fixture('cypressquestion.json').then((data) => {
            cy.get('#MongoTable > tbody > tr').last().find('td').first().should('have.text', data.Question  + ' Update');
            cy.get('#MongoTable > tbody > tr').last().find('td').last().find('button').last().click({force: true});

        });

    });
});
