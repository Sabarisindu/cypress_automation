
describe('SigninTest',() =>{
   
  

    it('Visits sprint URL',  () => {
        
    cy.visit('https://secureeps.payrollspan.net/')
    cy.opensignin()
    cy.wait(2000)
    cy.verifytext()
    cy.verfiytextbox()
    cy.linktext()
    cy.pswdicon()
    cy.pswdblank('sabarisindu.s+dec27a@w3magix.com')
    cy.wait(2000)
    cy.invalidlogin('sabarsindu.s+dec2ddd@w3magix.com','Span@113')
    cy.invalidpswd('sabarisindu.s+dec27a@w3magix.com','Span@112')
    cy.popupblank()
    cy.closepopup()
    cy.wait(2000)
    cy.navigatetoSignup()
    cy.navigatetoFpswd()


    })

})