const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("I visit my app pastry tool", () => {
  cy.visit("http://localhost:3000");
});

Then("I should see a search button to see all tool", () => {
  cy.get("button")
    .should('contain.text', 'See All Tools');

});

