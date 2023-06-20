//const { describe } = require("mocha");

describe('CSSLocators', () => {
    it("csslocator", () => {
        cy.
        cy.visit("https://automationexercise.com/products")
        cy.get("#search_product").type("Blue")
        cy.get("#submit_search").click()
        cy.get(".single-products").contains("Blue Top") //Asertion
    })
})