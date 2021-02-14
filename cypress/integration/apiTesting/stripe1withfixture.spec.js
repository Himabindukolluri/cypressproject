
before('with Fixtures',()=>{
    cy.fixture('stripe').as ('data')
})
describe('Stripe API', ()=>{

it('Retrieve customer', ()=>{

cy.request ({
    method:'GET',
    url: Cypress.env ('getCusturl'),
    auth: {
        bearer: Cypress.env('bearerToken')

    }

  }).then((res)=>{
   expect(res.body).has.property("description", null)

  })


})

it('getAllCustomers',()=>{
    cy.request({
        method :'GET',
        url:Cypress.env('allCusturl'),
        auth:{
            bearer:Cypress.env('bearerToken')
        }
    }).then((res)=>{
        expect(res.body).have.property('data')
    })
})

})

