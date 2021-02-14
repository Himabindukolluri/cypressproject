describe('Register',()=>{

    before('navigate to Url',()=>{
        cy.visit('https://demo.nopcommerce.com/')
    })

    it('Newuser',()=>{
        cy.get('.ico-register').click()
        cy.title().should('include','nopCommerce demo store. Register')
        cy.get('#gender-female').check()
        cy.get('#gender-female').check().should('be.checked')
        cy.get('#FirstName').type('Joe')
        cy.get('#LastName').type('User1')
        cy.xpath('//select[@name="DateOfBirthDay"]').select('1')
        cy.xpath('//select[@name="DateOfBirthMonth"]').select('June').should('have.value','6')
        cy.xpath('//select[@name="DateOfBirthYear"]').select('2016').should('have.value','2016')
        cy.get('#Email').type('JoeUser14@nop.com')
        cy.get('#Password').type('password1')
        cy.get('#ConfirmPassword').type('password1')
        cy.get('#register-button').click()
        cy.get('.result').invoke('text').as('confirmation')
        cy.get('@confirmation').should('include','Your registration completed')
        cy.get('.ico-logout').click()
    })
})
