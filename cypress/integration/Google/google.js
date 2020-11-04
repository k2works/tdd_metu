const url = "https://google.com";
Given("I open Google page", () => {
  cy.visit(url);
});
