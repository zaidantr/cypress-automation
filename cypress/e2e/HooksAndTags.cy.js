// Before
// After
// beforeEach
// afterEach

describe('MyTestSuite', () => {
    before(() => {
        cy.log("****** Launch App *******")
    })

    after(() => {
        cy.log("****** Close App *******")
    })

    beforeEach(() => {
        cy.log("***** Login *****")
    })
    afterEach(() => {
        cy.log("***** Logout *****")
    })

    it('search', () => {
        cy.log("******     Searching *******")
    })

    it.skip('Advance search', () => {
        cy.log("******  Advance Searching  *******")
    })

    it.only('Listing Searching', () => {
        cy.log("******  Listing Search  *******")
    })
})