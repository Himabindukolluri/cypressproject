describe('Fixtures',function(){

    before('Navigate to url',()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.fixture(Registerdata1).as('data')

    })

    it('Register',()=>{
        cy,get('@data').then((data)=>{

        
        cy.get('.ico-register').click()
        cy.title().should('include','nopCommerce demo store. Register')
        cy.get('#gender-male').check()
        cy.get('#gender-female').check().should('be.checked')
        cy.get('#FirstName').type(data.Firstname)
        cy.get('#LastName').type(data.Lastname)
        cy.xpath('//select[@name="DateOfBirthDay"]').select(data.Day)
        cy.xpath('//select[@name="DateOfBirthMonth"]').select(data.Month)
        cy.xpath('//select[@name="DateOfBirthYear"]').select(data.Year)
        cy.get('#Email').type(data.email)
        cy.get('#Password').type(data.Password)
        cy.get('#ConfirmPassword').type(data.Password)
        cy.get('#register-button').click()
        cy.get('.result').invoke('text').as('confirmation')
        cy.get('@confirmation').should('include','Your registration completed')
        })
    })
})