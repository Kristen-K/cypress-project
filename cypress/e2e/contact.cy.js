
describe("Fill in Contact input fields, submit form & assert success message", () => {
    context("Contact page", () => {
        it("fill in name, email, phone number & message", () => {
            cy.visit("https://practice.automationbro.com/contact/")
            cy.submitForm()
            cy.contains('[role="alert"]', "Thanks for contacting us! We will be in touch with you shortly") 
        })
    })
})


