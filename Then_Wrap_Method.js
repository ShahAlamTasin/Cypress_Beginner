

/// <reference  types= "cypress" />   
import {navigateTo} from '../support/PageObject/NavigationPageObject'

describe('this is a test suite for then and wrap method', () =>{

    beforeEach("Steps before each test case", () => {

 
        cy.visit('/')

        navigateTo.Forms('Form Layouts')
        
    })

    it("Then and wrap method  ->  test case  ", () => {

        /*

        // Selenium Style

        const firstform = 

        //Assertion with attribut -> can contain ( have.id , have.class )

        firstform.find('[placeholder="Email"]').should('have.attr','data-cy','imputEmail1')
        firstform.find('[placeholder="Password"]').should('have.id','inputPassword2') // System cant find this because asynchronus program
        
        // --------------Cypress is  asynchronus program thats why you cant  save an cypress result  and use it later------------------------

        */


        // cypress style 
        // After using then find method will work as jquery style
        //During then cypress method will not work  -> expect  instead of  should  -> cant use click 
        cy.contains('nb-card', 'Using the Grid').then(firstform => {

            const firstemail = firstform.find('[for="inputPassword2"]').text()

            cy.contains('nb-card', 'Basic form').then(Secondform => {
                const secondemail = Secondform.find('[for="exampleInputPassword1"]').text()
                expect(secondemail).to.equal(firstemail)

                //convert to cypress again -> can use cypress methods again 

                cy.wrap(Secondform).get('[for="exampleInputPassword1"]').should('contain', 'Password')
            })


            // every then method  variable will not be accessable outside the scope of the method 



        })

    })
})