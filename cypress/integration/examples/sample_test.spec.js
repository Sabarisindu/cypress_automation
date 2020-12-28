describe('My First Test', () => {
    it('Visits sprint URL', () => {
      cy.visit('https://secureeps.payrollspan.net/')
       cy.get('#btnSignIn').click()
       cy.get('#emailaddress').type('sabarisindu.s+dec21@w3magix.com')
       cy.get('#password').type('Span@123')
       cy.get('.mat-button-wrapper > mat-label').click()

      
    })
  })