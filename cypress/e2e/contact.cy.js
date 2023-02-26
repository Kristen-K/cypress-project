import ContactPage from "../support/pages/contactPage.js";

describe("Fill in Contact input fields, submit form & assert success message", () => {
  context("Contact page", () => {
    it("fill in name, email, phone number & message", () => {
      ContactPage.visit();
      ContactPage.submitForm();
      ContactPage.elements
        .alertRole()
        .contains(
          "Thanks for contacting us! We will be in touch with you shortly"
        )
        .should("be.visible");
    });
  });
});
