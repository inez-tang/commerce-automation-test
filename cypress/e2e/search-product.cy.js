describe('Customer search a product', () => {
    it('customer search a product from home', () => {
      cy.visit('https://dev.srikopi.com/')

      //choose shipping location
      cy.get('[style="padding: 16px; border-top: 1px solid rgb(250, 250, 250);"] > div').click()
      cy.wait(4000)
      cy.get('[style="display: flex; align-items: center;"] > .MuiInputBase-root > .MuiInputBase-input').type('Bulusan')
      cy.wait(4000)
      cy.get(':nth-child(2) > [style="display: flex; align-items: center; margin: 16px 0px; padding: 0px 16px;"]').click()
      cy.wait(4000)

      //search empty product
      cy.get('.MuiInputBase-input').click()
      cy.wait(4000)
      cy.get('.MuiInputBase-input').type('shampoo')
      cy.wait(4000)
      cy.get('.MuiGrid-container > .MuiGrid-root')
        .should('have.text', 'Item yang anda cari mungkin habis / tidak tersedia sekarang. Tunggu beberapa hari lagi.')
      cy.get('.MuiInputBase-input').clear()

      //search available product
      cy.get('.MuiInputBase-input').click()
      cy.wait(4000)
      cy.get('.MuiInputBase-input').type('kue')
      cy.wait(4000)

    })
})