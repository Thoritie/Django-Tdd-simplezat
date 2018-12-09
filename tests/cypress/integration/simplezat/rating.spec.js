context('Rating', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000/ratings')
  })

  it('should have 3 rating', () =>{
    cy.contains('How do we do?')
    cy.get('[href="/ratings/positive/"] > img').should('have.attr', 'alt', 'Positive')
    cy.get('[href="/ratings/neutral/"] > img').should('have.attr', 'alt', 'Neutral')
    cy.get('[href="/ratings/negative/"] > img').should('have.attr', 'alt', 'Negative')

    cy.get('img[alt="Positive"]').click()
    cy.wait(1000)

    cy.contains('Any comments?')
    cy.get('textarea[name="comment"]').type('you are doing great!')
    cy.get('button').click()
    cy.wait(1000)

    cy.contains('Thank You!')
  })
})
