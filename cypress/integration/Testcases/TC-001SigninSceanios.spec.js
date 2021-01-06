
describe('SigninTest',() =>{
   
    before(function () {
        cy.fixture('example').then(function (data) {
          this.data = data;
        })
      })
    
    it('Runs SignIn scenarios', function ()  {
        
    cy.visit('https://secureeps.payrollspan.net/')
    cy.opensignin()
    cy.wait(2000)
    cy.verifytext()
    cy.verfiytextbox()
    cy.linktext()
    cy.pswdicon()
    cy.pswdblank(this.data.Email1)
    cy.wait(2000)
    cy.invalidlogin(this.data.Email2,this.data.Password)
    cy.invalidpswd(this.data.Email1,this.data.Password1)
    cy.popupblank()
    cy.closepopup()
    cy.wait(2000)
    cy.navigatetoSignup()
    cy.navigatetoFpswd()


    })

})