describe('Mainmenu',()=>{

    before('Navigate to URL',()=>{
        cy.visit('https://demo.nopcommerce.com/')
    })

    it('Electronics',()=>{

       cy.xpath('(//a[text()="Electronics "])[1]').trigger('mouseover')
       cy.xpath('(//a[text()="Camera & photo "])[1]').click({force: true})
       cy.title().should('include','nopCommerce demo store. Camera &amp; photo')
    })
    /*
    it('Apparel',()=>{
cy.xpath('(//a[text()="Apparel "])[1]').trigger('mouseover')
cy.xpath('(//a[text()="Clothing "])[1]').click({force: true})
cy.title().should('include','nopCommerce demo store. Clothing')

    })
    */
   
})