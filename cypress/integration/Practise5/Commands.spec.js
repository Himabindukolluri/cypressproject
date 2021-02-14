describe('commands',()=>{

    before('Navigate to URL',()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('include','nopCommerce demo store')
    })

    it('SearchForLaptop',()=>{
        cy.Search('laptop')
        cy.get(':nth-child(1) > .product-item > .details > .product-title > a').should('be.visible')
    })
    it('SearchForMac',()=>{
        cy.Search('Mac')
        cy.get(':nth-child(1) > .product-item > .details > .product-title > a').should('be.visible')
    })
})