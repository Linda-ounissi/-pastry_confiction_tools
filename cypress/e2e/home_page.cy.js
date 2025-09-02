describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })
})

it('uses custom text for the button label', () => {
  cy.visit('/')
  // Assert that a button component has the correct text
  cy.get('button').should('contains.text', 'See All Tools')
})
