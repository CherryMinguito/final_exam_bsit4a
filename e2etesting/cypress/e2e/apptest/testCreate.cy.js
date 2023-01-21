describe('Create ', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/addquestion', { timeout: 30000 })
    });
      
        it('Adding fields to QUESTION...', () => {
            cy.fixture('question.json').then((question) =>{
                cy.Create(question.question, question.choice1, question.choice2, question.choice3, question.choice4)
            })
        })


})