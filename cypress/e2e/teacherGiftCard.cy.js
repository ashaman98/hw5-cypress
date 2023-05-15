describe("Barnes & Noble", () => {
  it("buys a gift card for the teacher", () => {
    cy.visit("https://www.barnesandnoble.com/");

    cy.get(".justify-content-start > :nth-child(6) > .rhf-nav-link")
      .should("exist")
      .should("contain.text", "Gift Cards")
      .click();

    cy.url().should("include", "/b/gift-cards/");

    cy.get("h1").should("exist").contains("B&N Gift Cards");

    cy.get(
      "[onclick=\"set_cookie('giftcards-emailN7_kids-teacher_na_imagetext');\"] > figure > img"
    ).click();

    // cy.url().should("include", "w/kids-teacher-barnes-noble/");

    cy.get("#cardValue").should("exist").type("100$");

    cy.get("#cardEmail").should("exist").type("test@email.com");

    cy.get("#cardEmailConfirm").should("exist").type("test@email.com");

    cy.get("#gcSubmitHidden").should("exist").click();

    cy.visit("https://www.barnesandnoble.com/");
  });
});
