before('with this keyword',function(){
    cy.fixture('stripe').then (function(data){
    this.data=data
})
})
describe('Stripe API', function(){

    it('create a new customer',function(){
       
        cy.request({
            method:'POST',
            url:Cypress.env('addCusturl'),
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
        
            },
            auth:{
                'bearer':Cypress.env('bearerToken')
            },
            body:{
                "name": this.data.name,
                "email":this.data.email,
                "description": this.data.description
            }
        
          }).then(function(res){
            expect(res.body).has.property("name", "Bridgerton")
            expect(res.body).has.property("email","Bridgerton@nop.com")
            expect(res.body).has.property("description", "null")
        
        })
    })
})
