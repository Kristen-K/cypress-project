describe("Get list of recent posts, check they are >10 characters & total of 5 posts", () => {

    beforeEach(() => {
        cy.visit("https://practice.automationbro.com/blog/")
    })
    context("Blog page: number of posts", () => {
        it("Get list of recent posts", () => {
            cy.get("#recent-posts-3 ul li").should("have.length", 5)

        })
    })

    context("Blog page: number of posts", () => {
        it("length of post should be greather than 10", () => {
            cy.get("#recent-posts-3 ul li").then(($list) => {
                for (var i = 0; i < $list.length; i ++) {
                     cy.get($list[i]).invoke('text').then((text) => {
                        expect(text.length).to.be.gte(10)
                        cy.log(text)
                     })
                }
            })

        })
        

    })
})