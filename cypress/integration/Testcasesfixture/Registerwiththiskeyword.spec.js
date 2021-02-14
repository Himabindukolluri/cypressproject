before('this keyword',function(){
    cy.visit('https://demo.nopcommerce.com/')
    cy.fixture('Registerdata1').then(function(data){
        
    })
})
describe('Register',function(){


  

    it('Newuser',function(){
        cy.get('.ico-register').click()
        cy.title().should('include','nopCommerce demo store. Register')
        cy.get('#gender-male').check()
        cy.get('#gender-female').check().should('be.checked')
        cy.get('#FirstName').type(this.data.Firstname)
        cy.get('#LastName').type(this.data.Lastname)
        cy.xpath('//select[@name="DateOfBirthDay"]').select(this.data.Day)
        cy.xpath('//select[@name="DateOfBirthMonth"]').select(this.data.Month)
        cy.xpath('//select[@name="DateOfBirthYear"]').select(this.data.Year)
        cy.get('#Email').type(this.data.email)
        cy.get('#Password').type(this.data.Password)
        cy.get('#ConfirmPassword').type(this.data.Password)
        cy.get('#register-button').click()
        cy.get('.result').invoke('text').as('confirmation')
        cy.get('@confirmation').should('include','Your registration completed')
    })

})