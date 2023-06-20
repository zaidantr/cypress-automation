describe('Handle tabs', () => {
    it('Approach 1', () => {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example >a').invoke('removeAttr', 'target').click(); // Clicking on link
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        // Operations
        cy.go('back'); // Back to the parent tab
    })
    it('Approach 2', () => {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example >a').then((e) => {
            let url = e.prop('href')
            cy.visit(url)
        })

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000)

        // Operations
        cy.go('back'); // Back to the parent tab
    })
})