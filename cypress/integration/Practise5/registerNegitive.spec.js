describe('Register',()=>{

    before('Navigate to URL',()=>{
        cy.visit('https://demo.nopcommerce.com/')
    })

    it('Newuser',()=>{

        cy.get('.ico-register').click()
        cy.get('#register-button').click()
        cy.get('#FirstName-error').invoke('text').as('Errormessage1')
        cy.get('@Errormessage1').should('include','First name is required.')

        cy.get('#LastName-error').invoke('text').as('Errormessage2')
        cy.get('@Errormessage2').should('include','Last name is required.')

        cy.get('#Email-error').invoke('text').as('Errormessage3')
        cy.get('@Errormessage3').should('include','Email is required.')

        cy.get('#Password-error').invoke('text').as('Errormessage4')
        cy.get('@Errormessage4').should('include','Password is required.')

        cy.get('#ConfirmPassword-error').invoke('text').as('Errormessage5')
        cy.get('@Errormessage5').should('include','Password is required.')

    })    
   
})