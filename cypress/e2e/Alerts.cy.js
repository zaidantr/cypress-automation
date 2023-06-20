describe('Alerts', () => {
    //1. javascript Alert: It will hace some text and an 'OK' button. Emang ga keluar prompt nya
    it.skip('JS Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Alert');
        })

        // Alert window automatically closed by CyPress

        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })
    //2. Javascript Confirm Alert: It will have some text with 'OK' and 'Cancel' buttons
    it.only('JS Confirm alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm');
        })

        // Alert confirm automatically closed by CyPress using OK Button

        cy.on('window:confirm', () => false) // Will close windows by cancel button

        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })

    //3. Javascript Prompt Alert: It will have some text with a text for user input along with 'OK'
    it.only('JS Prompt alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome');

        })
        cy.get("button[onclick='jsPrompt()']").click()


        // CyPress will automatically close prompt alert - it will use OK button - by default

        //cy.on('window:prompt', () => false)

        cy.get('#result').should('have.text', 'You entered: welcome')
    })
    //4. Javascript Prompt Alert: It will have some text with a text for user input along with 'OK'
    it.only('Authenticated alert', () => {

        //Approach 1
        cy.visit('https://the-internet.herokuapp.com/basic_auth',   { auth: 
                           {
                                username: "admin", 
                                password: "admin"
                            }
                        }); 

        cy.get("div[class='example'] p").should('have.contain', "Congratulations")

        //Approach 2
        // cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');

        // cy.get("div[class='example'] p").should('have.contain', "Congratulations! You must have the proper credentials.")

    })})