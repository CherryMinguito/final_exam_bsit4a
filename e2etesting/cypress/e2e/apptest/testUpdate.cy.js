describe('Update ', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/updatequestion', { timeout: 30000 })
    });
      
    it('Update QUESTION...', () => {
        cy.fixture('newQuestion.json').then((question) =>{
            cy.Create(question.question)
        })
    })


})