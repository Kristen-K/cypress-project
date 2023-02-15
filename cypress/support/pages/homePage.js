class HomePage {
    elements = {
        getStdBtn : () => cy.get("#get-started"),
        txtHeading : () => cy.get(".elementor-widget-container h1")
    }

    visitAbout() {
        cy.visit("/about/")
    }

    clickonGetStd() {
        this.elements.getStdBtn().click()
    }

}

module.exports = new HomePage();
