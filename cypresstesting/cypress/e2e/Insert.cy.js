const url = "http://localhost:3000/question";

describe('Check Insert', () => {
    it('Test Insert', () => {
    cy.visit(url);
    cy.url().should('eq', url);
    cy.get('#MongoTable').should('length', 1);
    cy.fixture('cypressquestion.json').then((data) => {

    cy.get('#Question').type(data.Question, {force: true});
    cy.get('#Question').should('have.value', data.Question);
    // A
    cy.get('#ChoiceA').type(data.ChoiceA, {force: true});
    cy.get('#ChoiceA').should('have.value', data.ChoiceA);
    // B
    cy.get('#ChoiceB').type(data.ChoiceB, {force: true});
    cy.get('#ChoiceB').should('have.value', data.ChoiceB);
    cy.get('#RdChoice' + data.Answer).check({force: true});

    cy.get('#RdChoice' + data.Answer).should('be.checked')
    cy.get('#InsertBtn').click({force: true});
    cy.wait(2000);

    cy.get('#MongoTable > tbody > tr').last().find('td').first().should('have.text', data.Question);
        });
    });
});
