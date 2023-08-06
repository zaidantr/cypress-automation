describe("API Testing", () => {
    let authToken = null;

    before('Creating access', () => {
        cy.request({
            method: 'POST',
            url: 'http://simple-books-api.glitch.me/api-clients/',
            headers: { 
                        'Content-Type': 'application/json' 
                     },
            body: {
                clientName: 'ABC',
                clientEmail: Math.random().toString(5).substring(2)+"@gmail.com"
            }
        }).then((response) => {
            authToken = response.body.accessToken;
        })
    })

    before('Creating new order', () => {
        cy.request({
            
            method: 'POST',
            url: 'http://simple-books-api.glitch.me/orders/',
            headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' +authToken 
                     },
            body: {
                "bookId": 1,
                "customerName": "xyzabc"
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.created).to.eq(true);
        });
    });

    it("Fetching all orders", () => {
        cy.request({
            method: 'GET',
            url: 'http://simple-books-api.glitch.me/orders/',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' +authToken 
             },
             cookies: {
                'cookieName': 'mycookie'
             }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).has.length(1)
    })
})
})