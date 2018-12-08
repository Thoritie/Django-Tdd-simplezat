context('Rating', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000')
  })

  it('should have 3 rating', () =>{
    cy.contains('How do you do?')
    cy.get('img').should('have.attr', 'alt', 'Positive')
    cy.get('img').should('have.attr', 'alt', 'Neutral')
    cy.get('img').should('have.attr', 'alt', 'Negative')

    cy.get('img[alt="Positive"]').click()

    cy.contains('Any comment?')
    cy.get('input[name="comment"]').type('you are doing great!')
    cy.get('button').click()

    cy.contains('Thank you!')
  })
})
