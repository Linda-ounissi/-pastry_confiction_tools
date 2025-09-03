Feature: Recherche d'outils
  Scenario: Recherche de livre de recette
    Given I visit my app pastry tool
    And Je dois voir le bouton to see all tool
    And Je clique sur le lien pour voir tous les outils
    And Je saisis un mot-clé de recherche macaron
    Then je dois voir une suggestion de livre de recette  pour macaron
