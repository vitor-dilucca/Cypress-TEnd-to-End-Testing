describe("Various examples", () => {
  beforeEach(() => {
    cy.visit("/examples");
  });

  it("multi-page testing", () => {
    cy.getDataTest("nav-why-cypress").click();
    cy.location("pathname").should("equal", "/");

    cy.getDataTest("nav-overview").click();
    cy.location("pathname").should("equal", "/overview");

    cy.getDataTest("nav-fundamentals").click();
    cy.location("pathname").should("equal", "/fundamentals");
  });

  it("intercepts", () => {
    cy.intercept("POST", "http://localhost:3000/examples", {
      fixture: "example.json",
    });
    cy.getDataTest("post-button").click();
  });

  it.only("grudges", () => {
    cy.contains("Add Some Grudges");

    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 0);
    });
    
    cy.getDataTest("grudge-input").within(() => {
      cy.get("input").type("some grudge");
    });
    cy.getDataTest("add-grudge-button").click();
    
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 1);
    });
    
    cy.getDataTest("grudge-input").within(() => {
      cy.get("input").type("number 2");
    });
    
    cy.getDataTest("add-grudge-button").click();
    
    cy.getDataTest("grudge-list").within(() => {
      cy.get('li').should('have.length',2)
      cy.get("li").its(0).should('contains.text','some grudge');
    });
  });
});
