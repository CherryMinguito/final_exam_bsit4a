describe('CRUD ', () => {
  it('Create', () => {
    cy.visit('http://localhost:3000/')

    cy.wait(1000)

    // Add addQuestion Button Clicked
    cy.get('[data-cy="addQuestion"]').click()

    // Get an input, type into it
    cy.get('[data-cy="question"]').type('What is your relationship status?')
    cy.get('[data-cy="choiceA"]').type('Single')
    cy.get('[data-cy="choiceB"]').type('In relationship')
    cy.get('[data-cy="choiceC"]').type('Married')
    cy.get('[data-cy="choiceD"]').type('Complicated')
    cy.get('[data-cy="answer"]').type('In relationship')

    // Add insertQuestion Clicked
    cy.get('[data-cy="insertQuestion"]').click()

    cy.wait(1000)

    // Assert
    cy.get('[data-cy="questionsTable"]').contains('td', 'What is your relationship status?').should('be.visible')
  })
  it('Update', () => {
    cy.visit('http://localhost:3000/')

    cy.wait(1000)

    // Add edit Button Clicked
    cy.get('[data-cy="edit"]').click()

    // Add editItem Button Clicked
    cy.contains('td', 'What is your relationship status?')
      .parent('tr')
      .children('td')
      .find('[data-cy="editItem"]')
      .click()

    // Get an input, type into it
    cy.get('[data-cy="questionEdit"]').clear().type('What is your course?')
    cy.get('[data-cy="choiceAEdit"]').clear().type('Information Technology / Computer Science')
    cy.get('[data-cy="choiceBEdit"]').clear().type('Business Management')
    cy.get('[data-cy="choiceCEdit"]').clear().type('Engineering')
    cy.get('[data-cy="choiceDEdit"]').clear().type('Education')
    cy.get('[data-cy="answerEdit"]').clear().type('Information Technology / Computer Science')

    // Add insertQuestion Clicked
    cy.get('[data-cy="updateQuestion"]').click()

    // Assert
    cy.get('[data-cy="questionsTable"]').contains('td', 'What is your course?').should('be.visible')

  })
  it('Update', () => {
    cy.visit('http://localhost:3000/')

    cy.wait(1000)

    // Add edit Button Clicked
    cy.get('[data-cy="edit"]').click()

    // Add editItem Button Clicked
    cy.contains('td', 'What is your course?')
      .parent('tr')
      .children('td')
      .find('[data-cy="deleteQuestion"]')
      .click()

    // Assert
    cy.get('[data-cy="questionsTable"]').contains('td', 'What is your course?').should('not.be.visible')

  })
  it('Show Answers', () => {
    cy.visit('http://localhost:3000/')

    cy.wait(1000)

    // Add edit Button Clicked
    cy.get('[data-cy="showAnswers"]').click()
  })
})
