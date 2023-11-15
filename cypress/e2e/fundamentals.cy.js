describe('Fundamentals test', () => {
  it('Contains correct header text', () => {
    cy.visit('/fundamentals')
    //essas barras '/testing/i ' é um regex e serve para q n seja case sensitive
    cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)
  })
})