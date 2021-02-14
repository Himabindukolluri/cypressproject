describe('cypress',()=>{

    before('navigate to Url',()=>{
        cy.visit('https://demo.nopcommerce.com/')
    })

    it('verify title',()=>{
         cy.get('.ico-register').click()
        cy.title().should('include','nopCommerce demo store. Register')
    })

    it('verify url',()=>{

        cy.get('.cart-label').click()
        cy.url().should('include','https://demo.nopcommerce.com/cart')
    })

    it('Alias and invoke',()=>{
     
        })
})