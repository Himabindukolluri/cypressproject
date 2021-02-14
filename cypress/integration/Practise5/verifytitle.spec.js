describe('cypress',()=>{
    before('Navigate to URL',()=>{
        cy.visit('https://demo.nopcommerce.com/')
        })
        
    it('verify page title',()=>{

cy.title().should('include','nopCommerce demo store')

    })

    it('verify Url',()=>{
        cy.get('.wishlist-label').click()
        cy.url().should('include','https://demo.nopcommerce.com/wishlist')

})
it('verify vote error',()=>{
    
    cy.get('.answer:first-of-type').click()
    cy.get('#vote-poll-1').click()
    cy.get('#block-poll-vote-error-1').should('have.text','Only registered users can vote.')
    

})
})