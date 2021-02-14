

describe('Alias and invoke',()=>{

    before('navigate to Url',()=>{
        cy.visit('https://demo.nopcommerce.com/')
    })

    it('News1',()=>{
cy.get('.news-title').eq(0).invoke('text').as('heading1')
cy.get('@heading1').should('include','New online store is open!')
})

it('news2',()=>{
    cy.get('.news-title').eq(1).invoke('text').as('heading2')
    cy.get('@heading2').should('include','nopCommerce new release!')


})
it('news3',()=>{
cy.get('.news-head').eq(2).invoke('text').as('heading3')
cy.get('@heading3').should('include','About nopCommerce')
})

it('featured products',()=>{
    cy.get('.product-title').eq(0).invoke('text').as('heading4')
    cy.get('@heading4').should('include','Build your own computer')
})

it('Digital downloads',()=>{
cy.get('.item-box').eq(2).invoke('text').as('heading5')
cy.get('@heading5').should('include',' Digital downloads ')

})
it('Community poll',()=>{
    cy.get('.home-page-polls').click()
})

it('like Nopcommerce',()=>{
    cy.get('.poll-display-text').invoke('text').as('heading6')
    cy.get('@heading6').should('include','Do you like nopCommerce?')
})
it('checkbox',()=>{
    cy.get('.ico-register').click()
    cy.get('[type="checkbox"]').uncheck()
    cy.get('[type="checkbox"]').uncheck().should('not.be.checked')
})

it('register male',()=>{
    cy.get('.ico-register').click()
cy.get('#gender-male').check()
cy.get('#gender-male').check().should('be.checked')

})
it('register female',()=>{
    cy.get('.ico-register').click()
    cy.get('#gender-female').check()
    cy.get('#gender-female').check().should('be.checked')
})
it('footer',()=>{
 cy.xpath('//a[text()="Addresses"]').click()

  

})
it('footer2',()=>{
cy.xpath('//a[text()="News"]').click()
})
it('footer3',()=>{
    cy.xpath('(//a[text()="details"])[1]').click()
})
it('fsearch',()=>{
cy.get('[placeholder="Search store"]').type('books')
})

})