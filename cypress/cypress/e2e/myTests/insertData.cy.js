const url = "http://localhost:3000/student";

describe('Check Local API', () => {
    //Visit The URL and Check Table if it has Data
    it('Test Data Insert', () => {
        cy.visit(url);
        //Assert Url
        cy.url().should('eq', url);

        cy.get('#StudTable').should('length', 1);

        cy.fixture('user.json').then((data) => {

            cy.get('#FName').type(data.fname);
            cy.get('#FName').should('have.value', data.fname);

            cy.get('#LName').type(data.lname);
            cy.get('#LName').should('have.value', data.lname);

            cy.get('#Course').type(data.course);
            cy.get('#Course').should('have.value', data.course);

            cy.get('#AddUser').click();

            cy.wait(2000);

            cy.get('#FName').should('be.empty');
            cy.get('#FName').should('be.empty');
            cy.get('#Course').should('be.empty');

            cy.get('#StudTable > tr').last().find('td').first().find('span').first().should('have.text', data.fname);
        });


    });
});
