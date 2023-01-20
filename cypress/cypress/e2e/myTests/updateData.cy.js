const url = "http://localhost:3000/student";

describe('Check Local API', () => {
    //Visit The URL and Check Table if it has Data
    it('Test Data Insert', () => {
        cy.visit(url);
        //Assert Url
        cy.url().should('eq', url);

        cy.get('#StudTable').should('length', 1);

        cy.get('#StudTable > tr').last().find('td').last().find('button').first().click();

        cy.get('#StudTable > tr').last().find('td').first().find('input').first().should('have.value', 'Paul Angelo');
        cy.get('#StudTable > tr').last().find('td').first().find('input').first().type('s');
        cy.get('#StudTable > tr').last().find('td').first().find('input').first().should('have.value','Paul Angelos');

        cy.get('#StudTable > tr').last().find('td').eq(1).find('input').first().should('have.value', 'Soltero');
        cy.get('#StudTable > tr').last().find('td').eq(1).find('input').first().type('y');
        cy.get('#StudTable > tr').last().find('td').eq(1).find('input').first().should('have.value','Solteroy');

        cy.get('#StudTable > tr').last().find('td').eq(2).find('input').first().should('have.value', 'BSIT');
        cy.get('#StudTable > tr').last().find('td').eq(2).find('input').first().type('s');
        cy.get('#StudTable > tr').last().find('td').eq(2).find('input').first().should('have.value','BSITs');


        cy.get('#StudTable > tr').last().find('td').last().find('button').first().click();

        cy.wait(2000);

        cy.get('#StudTable > tr').last().find('td').first().find('span').first().should('have.text', 'Paul Angelos');
        cy.get('#StudTable > tr').last().find('td').eq(1).find('span').first().should('have.text', 'Solteroy');
        cy.get('#StudTable > tr').last().find('td').eq(2).find('span').first().should('have.text', 'BSITs');

    });
});
