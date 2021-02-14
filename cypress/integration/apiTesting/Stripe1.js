describe('stripe1 customers', () => {


    it('Retrieve customer', () => {

        cy.request({
            method: 'GET',
            url: 'https://api.stripe.com/v1/customers/cus_Iw1zLA08D6Kayx',
            auth: {
                bearer: 'sk_test_51IIBMXDqBXrHlRWdUQJ6Ay6oDLvS3iJNTBExFu2e9EPH4zJX53Khxhs5RWMBjTcQ2ewQ4VZyDVXrIZRiCPYisnG000fII7aGpz'

            }

        }).then((res) => {
            expect(res.body).has.property("description", "null")

        })


    })

    it('getAllCustomers', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.stripe.com/v1/customers',
            auth: {
                bearer: 'sk_test_51IIBMXDqBXrHlRWdUQJ6Ay6oDLvS3iJNTBExFu2e9EPH4zJX53Khxhs5RWMBjTcQ2ewQ4VZyDVXrIZRiCPYisnG000fII7aGpz'
            }
        }).then((res) => {
            expect(res.body).have.property('data')
        })
    })


    it('Addacustomer', () => {

        cy.request({
            method: 'POST',
            url: 'https://api.stripe.com/v1/customers/cus_Iw1zLA08D6Kayx',
            headers: {
                'content-type': 'application/x-www-form-urlencoded'

            },
            auth: {
                'bearer': 'sk_test_51IIBMXDqBXrHlRWdUQJ6Ay6oDLvS3iJNTBExFu2e9EPH4zJX53Khxhs5RWMBjTcQ2ewQ4VZyDVXrIZRiCPYisnG000fII7aGpz'
            },
            body: {
                "name": "Bridgerton",
                "email": "Bridgerton@nop.com",
                "description": "null"
            }

        }).then((res) => {
            expect(res.body).has.property("name", "Bridgerton")
            expect(res.body).has.property("email", "Bridgerton@nop.com")
            expect(res.body).has.property("description", "null")


        })
    })




})


