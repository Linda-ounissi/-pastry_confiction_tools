const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("I visit my app pastry tool", () => {
  cy.visit("http://localhost:3000");
});

Given("Je dois voir le bouton to see all tool", () => {
  cy.get("button")
    .should('contain.text', 'See All Tools');
});

Given("Je clique sur le lien pour voir tous les outils",()=>{
  cy.get('.bottom').click()

});
Given("Je saisis un mot-clé de recherche macaron",()=>{
  cy.get('#query').type('macaron')
});
Then("je dois voir une suggestion de livre de recette  pour macaron",()=>{
  cy.get('input[name="commit"]').click()
});




