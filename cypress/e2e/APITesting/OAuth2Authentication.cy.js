// Pre-Requisite: Generate auth code
// https://github.com/login/oauth/authorize/{client_id}

// Get the OAuth2 access token
// POST: https://github.com/login/oauth/access_token
// QUery params: client_id, client_secret, code

// Send GET Request by using access token
// https://api.github.com/user/repos
// Auth: accessToken

describe("OAuth2",  () => {

    let accessToken = ""
    it("get OAuth2 access token", () => {
        cy.request({
            method: 'POST',
            url: 'https://github.com/login/oauth/access_token',
            qs: {
                client_id: '9b609a3e6e90969cb1a0',
                client_secret: '74a0cb9af48cfce56cdc9f815f426820db0dd019',
                code: '733acd0dad3fe8b2943a'
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200);
            const params = response.body.split('&');
            params[0].split("=")[1];

        })
    })
    it("OAuth2.0 Demo", () => {
        cy.request({
            method: 'GET',
            url: 'https://github.com/user/repos',
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200);
            // expect(response.body[0].id).to.equal(201070920)
        })
    })
})