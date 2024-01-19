

/// <reference  types= "cypress" />   
import {navigateTo} from '../support/PageObject/NavigationPageObject'

describe('this is a test suiteAssertion', () =>{

    beforeEach("Steps before each test case", () => {

 
        cy.visit('/')

        navigateTo.Forms('Form Layouts')
        
    })
   
    it.only('assertion in cypress', ()=>{

        //chai libary use
        // 2 types

        // -- No 1 BBD type ------
        // it receives 2 types as parameter
        // -- expect().to.be.equal()


        // --- No 2 --- TDD type

        // assert something / assert.equal()


        // no 3 -- Chai Jquery type
         // take elemnt as argument
        // expect($elementname). to.have.class


        // no 4 ----- sinon chai 

     /// used for unit test 


     // How to use should command ------------------

      /*

      // used with invoke & get & wrap 

      cy.get().should('contain','text')
      cy.get().should('have.class','classname')
      cy.get().should('have.value',attribute-value )
      
      cy.get().should('have.class','classname').and('have.text','Text') -> exact match the text 
      */


      // How to use expect  command ------------------

      /*

      // used with then method 

      cy.get().then( variable =>{

        expect(variable).to.equal('Text  ')
        expect(variable).to.have.class('classname')
        expect(variable).to.have.text('Text') -> exact match the text 
      })
      cy.get().should('have.class','classname')
      
      cy.get().should('have.class','classname').and('have.text','Text') -> exact match the text 
      */



    })
        

  
})