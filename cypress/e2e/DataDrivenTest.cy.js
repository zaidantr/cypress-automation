describe('MyTestSuite', () => {
    it('DataDrivenTest', () => {
        cy.fixture('orangehrm2').then((data) => {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            data.forEach((userdata) => {
                cy.get("input[placeholder='Username']").type(userdata.username);
                cy.get("input[placeholder='Password']").type(userdata.password);
                cy.get("button[type='submit']").click();

                if (userdata.username == 'Admin' && userdata.password == 'admin123') {
                    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > span:nth-child(2)").should('have.text', userdata.expected);
                    
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
                }
                else {
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('have.text', userdata.expected)
                }

            })
        })
    })
})