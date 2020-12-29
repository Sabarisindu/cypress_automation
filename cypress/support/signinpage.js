Cypress.Commands.add('opensignin', ( ) => { 

  cy.get('#btnSignIn').click()
   
 })

 Cypress.Commands.add('verifytext', () => {
   
 if(cy.contains('#mat-dialog-title-0','Sign in to your 123PayStubs account') && cy.contains('.mt-3 > .d-inline-block' , 'Sign In using email') ){

  
  cy.log('Content present')
 }
 else {

  cy.log('Content absent')
 }

 })
Cypress.Commands.add('verfiytextbox', () => {
var email = cy.get('#emailaddress')
var pswd = cy.get('#password')
if(email != null && pswd != null){

  cy.log('Email and password field are present')
}
else
{
  cy.log('Email and password is not present')
}

})
Cypress.Commands.add('pswdicon',()=>{
  if(cy.get('.mat-icon') != null){
    cy.log('Password eye icon present')
  }
  else{
    cy.log('Eye icon absent')
  }
})
Cypress.Commands.add('linktext',()=>{
  var linktext1 = cy.get('td > :nth-child(2) > .register-txt > .text-underline')
  var linktext2 = cy.get('.my-3 > :nth-child(2) > .register-txt > .text-underline')
  if(linktext1 != null && linktext2 != null){
    cy.log('Forgot password and Sign up link text are present')
  }
  else
  {
    cy.log('Forgot password and Sign up link text are not present')
  }
})
Cypress.Commands.add('pswdblank',(email) =>{
    cy.get('#emailaddress').type(email)
    cy.get('.mat-button-wrapper > mat-label').click()
    cy.log('Password required')
    cy.get('#emailaddress').clear()
})

Cypress.Commands.add('invalidlogin',(email1,password) =>{
  cy.get('#emailaddress').type(email1)
  cy.get('#password').type(password)
  cy.get('.mat-button-wrapper > mat-label').click()
  cy.log('Email address is not registered with us')
  cy.get('#emailaddress').clear()
  cy.get('#password').clear()  
  
  })
  Cypress.Commands.add('invalidpswd',(email,password) =>{
  cy.get('#emailaddress').type(email)
  cy.get('#password').type(password)
  cy.get('.mat-button-wrapper > mat-label').click()
  cy.log('Please enter a valid password')
  cy.get('#emailaddress').clear()
  cy.get('#password').clear() 

  })
  Cypress.Commands.add('popupblank',()=>{
  cy.get('.mat-button-wrapper > mat-label').click()
  cy.log('Email address and Password required')

  })
  Cypress.Commands.add('closepopup',()=>{
    cy.get('.close1 > span > .material-icons').click()
    cy.log('Sign In pop up closed successfully')
    cy.get('#btnSignIn').click()
    cy.log('Sign In pop up opened')

  })
Cypress.Commands.add('navigatetoSignup',() =>{
    cy.get('.my-3 > :nth-child(2) > .register-txt > .text-underline').click()
    cy.log('Navigated to Signup Pop up')
    cy.get('.register-txt > .text-underline').click()
  
})
Cypress.Commands.add('navigatetoFpswd',() =>{
  cy.get('td > :nth-child(2) > .register-txt > .text-underline').click()
  cy.log('Navigated to Forgot password Pop up')
  cy.get('.form-center > .text-underline').click()

})

