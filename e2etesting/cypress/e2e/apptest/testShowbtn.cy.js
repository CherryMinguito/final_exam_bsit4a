describe('Show Button', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/questionaire', { timeout: 30000 })
    });
      
        it('Clicking show button..', () => {
            cy.get('[data-cy=show_btn]').click();
            cy.wait(6000)
        })


})