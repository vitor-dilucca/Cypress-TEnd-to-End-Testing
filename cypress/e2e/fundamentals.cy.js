describe("Fundamentals test", () => {
  beforeEach(() => {
    cy.visit("/fundamentals");
  });

  it("Contains correct header text", () => {
    cy.getDataTest('fundamentals-header')
    //essas barras '/testing/i ' é um regex e serve para q n seja case sensitive
    // cy.get('[data-test="fundamentals-header"]').should('contain.text',/Testing Fundamentals/i);
    cy.getDataTest('fundamentals-header').should('contain.text',/Testing Fundamentals/i);
  });

  it.only("Accordion works correctly", () => {
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains('Your tests will exist in a describe block').should(
      "be.visible"
    );
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains('Your tests will exist in a describe block').should(
      "not.be.visible"
    );
  });
});
