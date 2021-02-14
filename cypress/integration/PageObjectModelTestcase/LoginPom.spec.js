import HomePage from '../../support/Pageobjects/HomePage'
import LoginPage from '../../support/Pageobjects/HomePage'

describe ('Login to nop',()=>{

const homepage =  new HomePage()
const loginpage = new LoginPage()
 before('Navigate to Url',()=>{

    homepage.navigateToUrl()
 })

 it('Login',()=>{

    homepage.clickLogin()
    cy.title().should('include',Cypress.env("loginPageTitle"))

    loginpage.enterEmail(Cypress.env("email"))
    loginpage.enterPassword(Cypress.env("password"))

    loginpage.clickLogin()
    loginpage.verifylogin()
    {


 })

})