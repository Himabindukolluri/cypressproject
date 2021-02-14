
describe('Dropdown',()=>{

    before('Navigate to URL',()=>{
        cy.visit('https://demo.nopcommerce.com/')
    })

    it('Register',()=>{
        cy.get('.ico-register').click()
        cy.xpath('//select[@name="DateOfBirthDay"]').select('5').should('have.value','5')
        cy.xpath('//select[@name="DateOfBirthMonth"]').select('April').should('have.value','4')
        cy.xpath('//select[@name="DateOfBirthYear"]').select('1996').should('have.value','1996')
    })    
   
})