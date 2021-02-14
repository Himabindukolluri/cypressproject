describe('Cypress',()=>{

before('Navigate to URL',()=>{
cy.visit('https://demo.nopcommerce.com/')
})

it('Class',()=>{

    //cy.get('.cart-label').click()



    //cy.get('#small-searchterms').type('laptop')

    //cy.get('a:contains("Jewelry")')

   //cy.xpath('(//a[text()="Electronics "])[1]').click()
   cy.xpath('(//a[@title="Show products in category Digital downloads"])[1]').click()

    //cy.get('h2:contains("Welcome")').click()
    //cy.get('[href="/digital-downloads]')
})



   


   

})

