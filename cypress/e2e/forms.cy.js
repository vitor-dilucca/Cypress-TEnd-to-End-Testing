describe('form test', ()=>{
  beforeEach(()=>{
    cy.visit('/forms')
  })

  it('Test subscribe form',()=>{
      cy.contains('Testing Forms')
      //usando .as vc cria uma alias, que serve para referenciar uma linha de codigo
      cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
      cy.get('@subscribe-input').type('zyzzelxulo9@gmail.com')
      cy.contains('Successfully subbed').should('not.exist')
      cy.getDataTest('subscribe-button').click()
      cy.contains('Successfully subbed').should('exist')
      cy.wait(3000)
      cy.contains('Successfully subbed').should('not.exist')
      
      cy.get('@subscribe-input').type('zyzzelxulo9@gmail.io')
      cy.contains('Invalid email').should('not.exist')
      cy.getDataTest('subscribe-button').click()
      cy.contains('Invalid email').should('exist')
      cy.wait(3000)

      cy.contains('Invalid email').should('not.exist')
      cy.getDataTest('subscribe-button').click()
      cy.contains('fail!').should('exist')
  })

})