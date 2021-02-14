describe('cypress',()=>{

    it('verify get text',()=>{

        cy.visit('https://demo.nopcommerce.com/')
        cy.get('.ico-login').invoke('text').then((text)=>{
            cy.log(text)
        //cy.get('.news-title').invoke('text').then((text)=>{
       
        })
        })
    })
