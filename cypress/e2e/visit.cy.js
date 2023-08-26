
describe('Visit Flip.com', () => {
    before(() => {
        
        cy.visit('/')

    })

    context('Login Button Click', () => {
    
    it('Click on login', function () {
        cy.get('#footer-login-button').scrollIntoView().should('be.visible').click()

        })

        

    })


})