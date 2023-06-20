//const { describe } = require("mocha");

describe('XPath Locators', () => {
    // it('find number of products', () => {
    //     cy.visit("https://automationexercise.com/products")
    //     cy.xpath(".product-image-wrapper").should('have.length', 34)
    // })
    it('find number of products', () => {
        cy.visit("https://automationexercise.com/products")
        cy.get(".product-image-wrapper").should('have.length', 34)
    })
    // it('chained products', () => {
    //     cy.visit("https://automationexercise.com/products")
    //     cy.xpath(".product-image-wrapper").xpath('child').should('have.length', 34)
    // })
}) 