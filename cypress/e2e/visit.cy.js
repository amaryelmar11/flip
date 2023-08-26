
describe('Visit Flip.com', () => {
    before(() => {
        
        cy.visit('/')

    })

    context('Login Button Click', () => {
    
    it('Click on login', function () {
        cy.get('[data-testid="appleAuthLink__anchor__login"]').scrollIntoView().should('be.visible').click()

        })



    })


})