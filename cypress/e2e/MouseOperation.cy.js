import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')

describe("Mouse Operations", () => {
    it('MouseHover', () => {
        cy.visit("https://demo.opencart.com/")
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").should('not.be.visible');
        cy.get(".nav-link.dropdown-toggle[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20']").trigger("mouseover").click();
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").should('be.visible');
    })
    it('Right click', () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

        //Approach 1
        // cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu');
        // cy.get('.context-menu-icon-copy').should('be.visible')

        // Approach 2
        cy.get('.context-menu-one.btn.btn-neutral').rightclick()
        cy.get('.context-menu-icon-copy').should('be.visible')
    })
    it('Double click', () => {
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
        cy.frameLoaded('#iframeResult')
        // Approach 1 Trigger()

        // cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick')
        // cy.iframe('#iframeResult').find('#field2').should('have.value', 'Hello World!')
        // Approach 1\2 dblClick()

        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick()
        cy.iframe('#iframeResult').find('#field2').should('have.value', 'Hello World!')

    })
    it('Drag and Drop using plugin', () => {
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get('#box6').should('be.visible');
        cy.get('#box106').should('be.visible');
        cy.get('#box6').drag('#box106');
    })
    it.only('Scrolling Pgae', () => {
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView({duration: 2000})
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').should("be.visible")
        cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').scrollIntoView({duration: 2000})
        cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').should("be.visible")

        cy.get('#footer').scrollIntoView()
    })
})