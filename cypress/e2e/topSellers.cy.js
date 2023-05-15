describe("Barnes & Noble", () => {
    it("display top sellers", () => {
      cy.visit("https://www.barnesandnoble.com/");
  
  
      cy.get('[href="/b/books/_/N-1fZ29Z8q8"] > .hpiconLabel')
      .contains("BESTSELLERS")
      .should("exist")
      .click();

      cy.url()
      .should("include", "b/books/_/");

      cy.get('.header-with-brackets')
      .should("exist")
      .should('contain.text', 'B&N Top 100: Bestselling Books');
  
      cy.visit("https://www.barnesandnoble.com/");
    });
  });
  