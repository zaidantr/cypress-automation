// go ()

describe('mysuite', () => {
    it('Navigation Test', () => {
        cy.visit("https://demo.opencart.com/")
        cy.title().should('eq', "Your Store")
        cy.get("li:nth-child(7) a:nth-child(1)").click()
        cy.get("div[id='content'] h2").should('have.text', "Cameras")

        cy.go('back') // Go back to home
        cy.title().should('eq', "Your Store")

        cy.go('forward') // Go back to home
        cy.get("div[id='content'] h2").should('have.text', "Cameras")
        
        cy.go(-1) // home

        cy.go(1) // Cameras
        cy.get("div[id='content'] h2").should('have.text', "Cameras")

        cy.reload()
    })
})