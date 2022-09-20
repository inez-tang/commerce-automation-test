describe('Customer make an order', () => {
    it('customer add product and checkout', () => {
      cy.visit('https://dev.srikopi.com/')

      //choose shipping location
      cy.get('[style="padding: 16px; border-top: 1px solid rgb(250, 250, 250);"] > div').click()
      cy.wait(4000)
      cy.get('[style="display: flex; align-items: center;"] > .MuiInputBase-root > .MuiInputBase-input').type('Bulusan')
      cy.wait(4000)
      cy.get(':nth-child(2) > [style="display: flex; align-items: center; margin: 16px 0px; padding: 0px 16px;"]').click()
      cy.wait(4000)

      //add product
      cy.scrollTo('bottom')
      cy.wait(4000)
      cy.get(':nth-child(1) > .jss54 > :nth-child(2) > .MuiButtonBase-root').click()
      cy.get('.MuiPaper-root > .MuiGrid-container').click()
      cy.wait(4000)

      //checkout
      cy.get('[tabindex="-1"]').click
      cy.wait(4000)
      //input data
      cy.get('.MuiList-root > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Mawar')
      cy.wait(4000)
      cy.get('[style="padding: 0px 16px 0px 0px;"] > .MuiInputBase-root > .MuiInputBase-input').type('85222333111')
      cy.wait(4000)
      cy.get(':nth-child(4) > .MuiInputBase-root').type('tambah kantong plastik')
      cy.wait(4000)
      //choose payment method
      cy.get('.MuiFormControl-root > .MuiInputBase-root').click()
      cy.wait(4000)
      cy.contains('Cash on delivery').click()
      cy.wait(4000)
      cy.get('.MuiGrid-root > div > .MuiButtonBase-root').click()
      
    })
  })