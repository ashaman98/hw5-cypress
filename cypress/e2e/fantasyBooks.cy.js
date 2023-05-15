describe("Barnes & Noble", () => {
  it("navigates to scifi and fantasy section", () => {
    cy.visit("https://www.barnesandnoble.com/");
    cy.get('#rhfCategoryFlyout_Fiction')
    .should("exist")
    .click()
    .wait(2000);

    cy.url().should("include", "b/fiction/books");

    cy.get('h1')
    .should("exist")
    .contains("Fiction Books")
    
    cy.get('#refinements > :nth-child(3) > #sidebar-section-FictionSubjects > :nth-child(10) > a')
    .should("exist")
    .contains("Science Fiction & Fantasy")
    .click()
    .wait(2000);
    
    cy.url().should("include", "/science-fiction-fantasy/");
    
    cy.get('h1')
    .should("exist")
    .contains("Science Fiction & Fantasy Books")


    cy.visit("https://www.barnesandnoble.com/");
  });
});
