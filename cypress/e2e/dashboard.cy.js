describe('Dashboard Page', () => {
  it('Display booked cargo info', () => {
    cy.visit('/dashboard')
    cy.contains('Cargas registradas')
    cy.get('.cargo-grid')
      .first()
      .find('.card-container')
      .should('be.visible')
      .its('length')
      .should('be.gte', 3)
  })

  it('Display a cargo info when given a tracking id on the url', () => {
    cy.visit('/dashboard/13C491')
    cy.contains('Cargo Details').contains('13C491')
  })
})
