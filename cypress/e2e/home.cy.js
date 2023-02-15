
describe('Home', () => {

    beforeEach(() => {
        cy.visit("/")
    })
    context("Home Page", () => {
        it("open URL", () => {
            cy.title().should("eq", "Practice E-Commerce Site – Automation Bro")
        }) 
    })
   

    context("About page", () => {
        it("Open About page & assert test", () => {
            cy.visit("https://practice.automationbro.com/about/")
            cy.location("pathname").should("eq", "/about/")
        })  

    })

    context("Additional Home page tests", () => {
        it("Click get started button & assert URL contains get-started text", () => {
            cy.get("#get-started").click()
            cy.url("pathname").should("contain", "get-started")
        })

        it("Find heading element", () => {
            cy.get(".elementor-widget-container h1").should("have.text", "Think different. Make different.")
        })
    })
   
   
});