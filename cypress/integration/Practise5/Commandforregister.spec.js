describe('commands',()=>{

    before('Navigate to URL',()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('include','nopCommerce demo store')
    })

    it('commandRegister',()=>{
      //  cy.register('Alan','Scott','scotta@noop.com','Alan123scott','Alan123scott')
       // cy.get('.result').invoke('text').as('confirmation')
       // cy.get('@confirmation').should('include','Your registration completed')
    })
})