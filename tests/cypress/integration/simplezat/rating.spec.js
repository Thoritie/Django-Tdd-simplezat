context('Rating', () => {
  beforeEach(() => {
    cy.visit('/ratings/')
  })

  it('should have 3 rating', () =>{
    cy.get('h1').should('contain', 'How do we do?')
    cy.get('[href="/ratings/positive/"] > img').should('have.attr', 'alt', 'Positive')
    cy.get('[href="/ratings/neutral/"] > img').should('have.attr', 'alt', 'Neutral')
    cy.get('[href="/ratings/negative/"] > img').should('have.attr', 'alt', 'Negative')

    cy.get('img[alt="Positive"]').click()
    cy.wait(1000)

    cy.get('h1').should('contain', 'Any comments?')
    cy.get('textarea[name="comment"]').type('you are doing great!')
    cy.get('button').click()
    cy.wait(1000)

    cy.get('h1').should('contain', 'Thank You!')
  })

  it('shoud require comment after give rating without comment', () =>{
    cy.get('img[alt="Positive"]').click()
    cy.wait(1000)

    cy.get('textarea[name="comment"]').should('have.attr', 'required')

    cy.get('button').click()
    cy.get('body').should('not.contain', 'Thank You!')
  })
})
