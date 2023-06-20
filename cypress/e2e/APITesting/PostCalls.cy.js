describe("API Testing", () => {
    it.skip("Approach - Hard coded json object", () => {
        const requestBody = {
            tourist_name: "Mike",
            tourist_email: "joasasaasa3332@gamil.com",
            tourist_location: "Paris"
        }
        cy.request({
                    method: "POST",
                    url: 'http://restapi.adequateshop.com/api/Tourist',
                    body: requestBody
                })
                .then((response) => {
                    expect(response.status).to.eq(201)
                    expect(response.body.tourist_name).to.eq("Mike")
                    expect(response.body.tourist_email).to.eq("joasasaasa3332@gamil.com")
                    expect(response.body.tourist_location).to.eq("Paris")
                })

    })
    it("Approach - Dynamically ", () => {
        const requestBody = {
            tourist_name: Math.random().toString(5).substring(2),
            tourist_email: Math.random().toString(5).substring(2)+"@gmail.com",
            tourist_location: "Paris"
        }
        cy.request({
                    method: "POST",
                    url: 'http://restapi.adequateshop.com/api/Tourist',
                    body: requestBody
                })
                .then((response) => {
                    expect(response.status).to.eq(201)
                    expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                    expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
                    expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
                })

    })
    
    it("Approach 3 - Using fixture", () => {
        cy.fixture('tourist').then((data) => {
            const requestBody = data
            cy.request({
                method: "POST",
                url: 'http://restapi.adequateshop.com/api/Tourist',
                body: requestBody
            })
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
                expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
            })

            })
        })

})