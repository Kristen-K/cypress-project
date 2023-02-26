class BlogPage {
  elements = {
    postList: () => cy.get("#recent-posts-3 ul li"),
  };

  visit() {
    cy.visit("/blog/");
  }

  numberOfPosts() {
    this.elements.postList().should("have.length", 5);
  }

  lengthOfPost() {
    this.elements.postList().then((list) => {
      for (var i = 0; i < list.length; i++) {
        cy.get(list[i])
          .invoke("text")
          .then((text) => {
            expect(text.length).to.be.gte(10);
            cy.log(text);
          });
      }
    });
  }
}

module.exports = new BlogPage();
