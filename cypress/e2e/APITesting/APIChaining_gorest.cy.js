// POST https://gorest.co.in/public/v2/users
// PUT https://gorest.co.in/public/v2/users/${userId}
// DELETE https://gorest.co.in/public/v2/users/${userId}

describe("GORest API Chaining", () => {
    const auth_token = 'Bearer 3fc1ca13ee9d8e09e9b49ef42cdb0d86ce780c35cdbf4982ded21cc5e04ca27b'
    it('create, update, delete user in Gorest API', () => {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            body: {
                name: 'John Kenedy',
                gender: 'Male',
                email: Math.random().toString(5).substring(2)+'@gmail.com',
                status: 'active'
            },
            headers: {
                Authorization: auth_token
            }
        })
        .then((response) => {
            expect(response.status).to.equal(201)
            const userId = response.body.id
            // Update user name
            cy.request({
                method: 'PUT',
                url: `https://gorest.co.in/public/v2/users/${userId}`,
                body: {
                    name: 'Scott'
                },
                headers: {
                    Authorization: auth_token
                }
            })
            .then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body.name).to.equal('Scott')
                // Delete resource
                cy.request({
                    method: 'DELETE',
                    url: `https://gorest.co.in/public/v2/users/${userId}`,
                    headers: {
                        Authorization: auth_token
                    }
                })
                .then((response) => {
                    expect(response.status).to.equal(204)
                })
            })
        })
    })
    
})