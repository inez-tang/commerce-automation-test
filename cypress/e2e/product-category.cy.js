describe('Customer is accessing product category', () => {
    it('customer is accessing spesific product category', () => {
      cy.visit('https://dev.srikopi.com/')

      //choose shipping location
      cy.get('[style="padding: 16px; border-top: 1px solid rgb(250, 250, 250);"] > div').click()
      cy.wait(4000)
      cy.get('[style="display: flex; align-items: center;"] > .MuiInputBase-root > .MuiInputBase-input').type('Bulusan')
      cy.wait(4000)
      cy.get(':nth-child(2) > [style="display: flex; align-items: center; margin: 16px 0px; padding: 0px 16px;"]').click()
      cy.wait(4000)

      cy.get('.jss68').click()
      cy.wait(4000)
      cy.get('.jss68')
      .should('have.text', 'Foody Moody')
    })
})