
describe('checkbox',()=>{

    before('navigate to Url',()=>{
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('checkbox1',()=>{

        cy.xpath('//a[text()="Checkboxes"]').click()
        cy.xpath('//form[@id="checkboxes"]//input[1]').check()
        cy.xpath('//form[@id="checkboxes"]//input[1]').check().should('be.checked')
    })
  
})