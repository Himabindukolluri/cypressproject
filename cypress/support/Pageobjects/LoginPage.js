class LoginPage
{
enterEmail(em)
{
cy.get('#Email').type(em)
}
enterPassword(pw)
{
cy.get('#Password').type(pw)
}
clickLogin()
{
cy.get('.login-button').click()
}
verifylogout()
    {
cy.get('.ico.logout').click()
    }

}
export default LoginPage