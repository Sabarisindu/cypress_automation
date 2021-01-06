describe('SigninTest',() =>{
   
    before(function () {
        cy.fixture('example').then(function (data) {
          this.data = data;
        })
      })
    
    it('Runs Forgotpswd scenarios', function ()  {
        
    cy.visit('https://secureeps.payrollspan.net/')
    cy.openforgotpswd()
    cy.verifyftext()
    cy.verfiyftextbox()
    cy.verfiyfpswdbtn()
    cy.flinktext()    
    cy.emailblank()
    cy.invalidemail(this.data.Email)
    cy.validemail(this.data.Email3)
    })

})