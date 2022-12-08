describe('Book Page', () => {
  it('Book a cargo', () => {
    cy.visit('/book')
    cy.contains('Book a Cargo')
    cy.get('select').eq(0).select('Maceió')
    cy.get('select').eq(1).select('Fortaleza')
    cy.get('input[type=date]').type('2023-12-12')

    cy.intercept('POST', '/cargos', {
      statusCode: 200,
      body: {
        _id: '1231asddasf'
      }
    }).as('postCargo');

    cy.get('button[type=submit]').click()
    cy.get('@postCargo').its('response.statusCode').should('eq', 200)
  })
})
