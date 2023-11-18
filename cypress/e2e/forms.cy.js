describe('form test', ()=>{
  beforeEach(()=>{
    cy.visit('/forms')
  })
  it('Test subscribe form',()=>{
    cy.contains('Testing Forms')
  })
})