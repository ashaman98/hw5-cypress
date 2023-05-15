describe("Barnes & Noble", () => {
  it("tests search functionality", () => {
    cy.visit("https://www.barnesandnoble.com/");

    cy.get("input.rbt-input-main")
    .should("exist")
    .type("Silmariliion");

    cy.get(".input-group-append > .btn")
    .should("be.enabled")
    .click();

    cy.url().should("include", "/s/");

    cy.get(
      ":nth-child(1) > .product-shelf-info > .product-shelf-title > a"
    ).should("contain.text", "The Silmarillion");

    cy.visit("https://www.barnesandnoble.com/");
  });
});
