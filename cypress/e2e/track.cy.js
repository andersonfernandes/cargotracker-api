describe('Tracking Page', () => {
  it('Insert tracking id and get the cargo data', () => {
    cy.visit('/track')
    cy.get('input.traking-form-input').type('13C491')
    cy.get('button.button-component').click()
    cy.contains('Santos para Maceió')
    cy.contains('Com data limite: 11/12/2022')
  })
})
