describe("Get list of recent posts, check they are >10 characters & total of 5 posts", () => {
    context("Blog page", () => {
        it("Get list of recent posts", () => {
            cy.visit("https://practice.automationbro.com/blog/")
            cy.get("#recent-posts-3 ul li").should("have.length", 5)
        })
    })
})