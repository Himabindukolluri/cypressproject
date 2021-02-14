const getfixtures = [
    {
        "name": "LoginTestData1",
        "context": "1"
    },
    {
        "name": "LoginTestData2",
        "context": "2"
    },
    {
        "name": "LoginTestData3",
        "context": "3"
    }
]
describe('Fixtures', function () {
    getfixtures.forEach((getfixture) => {
        context(getfixture.context, function () {
            before(function () {
                cy.fixture(getfixture.name).then(function (data) {
                    this.data=data;

                })
            })

            it('login', function () {
                cy.visit('https://demo.nopcommerce.com/')
                cy.get('.ico-login').click()
                cy.get('#Email').type(this.data.email)
                cy.get('#Password').type(this.data.password)
                cy.get('.login-button').click()

            })


          
        })
    })

})
