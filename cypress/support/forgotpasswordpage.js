Cypress.Commands.add('openforgotpswd', ( ) => { 

    cy.get('#btnSignIn').click()
    cy.get('td > :nth-child(2) > .register-txt > .text-underline').click()
     
   })

   Cypress.Commands.add('verifyftext', () => {
   
    if(cy.contains('#mat-dialog-title-1',' Forgot your Password ') && cy.contains('.font-500' , 'Please enter your registered email address, and we’ll send you a link to reset your password.') ){
   
     
     cy.log('Content present')
    }
    else {
   
     cy.log('Content absent')
    }
})

Cypress.Commands.add('verfiyftextbox', () => {
    var email = cy.get('#emailaddress')
    if(email != null ) {
    
      cy.log('Email  field is present')
    }
    else
    {
      cy.log('Email  is not present')
    }
    
    })

Cypress.Commands.add('verfiyfpswdbtn', () => {
     var button = cy.get('.form-center > .btn > .mat-button-wrapper')
     if(button != null ) {
        cy.log('Password reset button is present')
     }
     else
     {
      cy.log('Password reset button is not present')
    }
        
    })

Cypress.Commands.add('flinktext',()=>{
  var linktext = cy.get('.form-center > .text-underline')
  if(linktext != null) {
    cy.log('Back to Signin link text is present')
  }
  else
  {
    cy.log('Back to Signin link text is not present')
  }
})

Cypress.Commands.add('emailblank',() =>{
  cy.get('.form-center > .btn > .mat-button-wrapper').click()
  cy.log('Email address required')
})

Cypress.Commands.add('invalidemail',(email) =>{
  cy.get('#emailaddress').type(email)
  cy.get('.form-center > .btn > .mat-button-wrapper').click()
  cy.log('Email address is not registered with us')
  cy.get('.close').click()
  cy.get('#emailaddress').clear()
  })
Cypress.Commands.add('validemail',(email) =>{
  cy.get('#emailaddress').type(email)
  cy.get('.form-center > .btn > .mat-button-wrapper').click()
  cy.log('Password reset link sent successfully')
  
})