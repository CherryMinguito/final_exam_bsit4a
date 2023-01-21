// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('Create', (question, choice1, choice2, choice3, choice4) => { 
    cy.get('[data-cy=question]').type(question);
    cy.get('[data-cy=choice1]').type(choice1);
    cy.get('[data-cy=choice2]').type(choice2);
    cy.get('[data-cy=choice3]').type(choice3);
    cy.get('[data-cy=choice4]').type(choice4);
    cy.get('input[data-cy=cb]').parent().click();
    cy.wait(5000)
    cy.get('[data-cy=sub_btn]').click();
    cy.url().should('eq', 'http://localhost:3000/questionaire');
  })

  Cypress.Commands.add('Delete', () => { 
    cy.wait(5000)
    cy.get('[data-cy=select]').click().type("{downArrow}{enter}", {force: true})

    
    cy.get('[data-cy=delbtn]').click();
    cy.url().should('eq', 'http://localhost:3000/updatequestion');
  })
  Cypress.Commands.add('Update', (question) => { 
    cy.get('[data-cy=select]').click().type("{downArrow}{enter}", {force: true})
    cy.get('[data-cy=question]').type(question);
    cy.get('[data-cy=upbtn]').click();
    cy.url().should('eq', 'http://localhost:3000/updatequestion');
  })

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })