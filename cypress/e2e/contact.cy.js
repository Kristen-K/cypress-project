describe("Fill in Contact input fields, submit form & assert success message", () => {
    context("Contact page", () => {
        it("fill in name, email, phone number & message", () => {
            cy.visit("https://practice.automationbro.com/contact/")
            cy.get("#evf-277-field_ys0GeZISRs-1").type("Petee")
            cy.get("#evf-277-field_LbH5NxasXM-2").type("email@email.com")
            cy.get("#evf-277-field_66FR384cge-3").type("00000000000")
            cy.get("#evf-277-field_yhGx3FOwr2-4").type("Hello, again!")
            cy.get("#evf-submit-277").click()
            cy.contains('[role="alert"]', "Thanks for contacting us! We will be in touch with you shortly") 
        })
    })
})


