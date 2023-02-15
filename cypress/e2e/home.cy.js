import HomePage from "../support/pages/homePage.js"

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
          HomePage.visitAbout()
            cy.location("pathname").should("eq", "/about/")
        })  
    })

    context("Additional Home page tests", () => {
        it("Click get started button & assert URL contains get-started text", () => {
          HomePage.clickonGetStd()
            cy.url("pathname").should("contain", "get-started")
        })

        it("Find heading element", () => {
            HomePage.elements.txtHeading().should("have.text", "Think different. Make different.")
        })
    })
   
   
});