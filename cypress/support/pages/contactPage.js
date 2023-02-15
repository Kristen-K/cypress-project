import { faker } from '@faker-js/faker';

class ContactPage {

    elements = {
        inputName: () => cy.get("#evf-277-field_ys0GeZISRs-1"), 
        inputEmail: () => cy.get("#evf-277-field_LbH5NxasXM-2"),
        inputPhoneNumber: () => cy.get("#evf-277-field_66FR384cge-3"),
        textAreaMessage: () => cy.get("#evf-277-field_yhGx3FOwr2-4"), 
        submitBtn: () => cy.get("#evf-submit-277"),
        alertRole: () => cy.get("[role='alert']")
    }
    visit() {
        cy.visit("/contact/")
    }

    submitForm() {
        this.elements.inputName().type(faker.name.fullName())
        this.elements.inputEmail().type(faker.internet.email())
        this.elements.inputPhoneNumber().type(faker.phone.number())
        this.elements.textAreaMessage().type(faker.lorem.paragraph(2))
        this.elements.submitBtn().click()
    }

}

module.exports = new ContactPage();

