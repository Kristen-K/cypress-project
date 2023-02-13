import { faker } from '@faker-js/faker';

describe("Fill in Contact input fields, submit form & assert success message", () => {
    context("Contact page", () => {
        it("fill in name, email, phone number & message", () => {
            cy.visit("https://practice.automationbro.com/contact/")
            cy.get("#evf-277-field_ys0GeZISRs-1").type(faker.name.fullName())
            cy.get("#evf-277-field_LbH5NxasXM-2").type(faker.internet.email())
            cy.get("#evf-277-field_66FR384cge-3").type(faker.phone.number())
            cy.get("#evf-277-field_yhGx3FOwr2-4").type(faker.lorem.paragraph(2))
            cy.get("#evf-submit-277").click()
            cy.contains('[role="alert"]', "Thanks for contacting us! We will be in touch with you shortly") 
        })
    })
})


