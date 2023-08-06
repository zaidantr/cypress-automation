describe("Authentication", () => {
    it("Basic Authentication", () => {
        cy.request({
            method: "GET",
            url: "https://postman-echo.com/basic-auth",
            auth: {
                user: 'postman',
                pass: 'password'
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.authenticated).to.eq(true)
            
        })
    })
    it("Digest Authentication", () => {
        cy.request({
            method: "GET",
            url: "https://postman-echo.com/basic-auth",
            auth: {
                username: 'postman',
                password: 'password',
                method: 'digest'
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.authenticated).to.eq(true)

        })
    })

    const token = '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'

    it("Bearer Token Auth", () => {
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/user/repos',
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })
    it("API Key Auth", () => {
        cy.request({
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/forecast/daily',
            qs: {
                q: 'Jakarta',
                appid: 'fe9c5cddb7e01d747b4611c3fc9eaf2c' // API key and value
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})