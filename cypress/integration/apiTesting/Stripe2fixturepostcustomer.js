before('with Fixtures',()=>{
    cy.fixture('stripe').as ('data')
})
describe('Stripe API', ()=>{


it('Addacustomer',()=>{

    cy.get('@data').then((data)=>{

   
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
        "name": data.name,
        "email":data.email,
        "description": data.description
    }

  }).then((res)=>{
    expect(res.body).has.property("name", "Bridgerton")
    expect(res.body).has.property("email","Bridgerton@nop.com")
    expect(res.body).has.property("description", "null")
})
})
})
})
