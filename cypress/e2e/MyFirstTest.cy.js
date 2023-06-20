describe('My First Test', () => {
    it('Test 1-Verify title-positive', () => {
        // Stepnya disini 
        cy.visit("https://opensource-demo.orangehrmlive.com")
        cy.title().should('eq', 'OrangeHRM')
    })
    it('Test 2-Verify titile-negative', () => {
        // Stepnya disini 
        cy.visit("https://opensource-demo.orangehrmlive.com")
        cy.title().should('eq', 'OranasageHRM')
    })
  })

  // npx cypress run --spec "folder path"
  // npx cypress run --browser chrome --headed, headless