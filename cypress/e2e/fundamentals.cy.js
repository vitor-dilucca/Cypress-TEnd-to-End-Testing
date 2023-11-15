describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/fundamentals')
    //essas barras '/testing/i ' é um regex e serve para q n seja case sensitive
    cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)
  })
})