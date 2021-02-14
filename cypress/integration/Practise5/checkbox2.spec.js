describe('checkbox',()=>{

    before('navigate to Url',()=>{
        cy.visit('https://the-internet.herokuapp.com/')
    })
    it('checkbox2',()=>{
        cy.xpath('//a[text()="Checkboxes"]').click()
        cy.xpath('//form[@id="checkboxes"]//input[2]').uncheck()
        cy.xpath('//form[@id="checkboxes"]//input[2]').uncheck().should('not.be.checked')
    })

    it('checkbox3',()=>{
        cy.xpath('//a[text()="Checkboxes"]').click()
cy.xpath('//form[@"id="checkboxes"]//input[2]').as('check3')
cy.get('@uncheck3').uncheck().should('not.be.checked')
})
})