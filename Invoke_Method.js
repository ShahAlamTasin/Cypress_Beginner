

/// <reference  types= "cypress" />   
import {navigateTo} from '../support/PageObject/NavigationPageObject'

describe('this is a test suite for invoke method', () =>{

    beforeEach("Steps before each test case", () => {

 
        cy.visit('/')

        navigateTo.Forms('Form Layouts')
        
    })

    it("Test case -> invoke methods", () => {

        // invoke method 


      
              cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').then(label => {
                  expect(label.text()).is.equal("Email address")
              })
      
           

        // invoke will bring the value / drag out the value -> no tet method needed here 


        cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').invoke('text').then(labelinvoke => {
            expect(labelinvoke).is.equal("Email address")


            
            navigateTo.Forms("Datepicker")

            var val = true;

            cy.contains('nb-card', 'Common Datepicker').find('[placeholder="Form Picker"]').click().then(element => {

             
                    cy.wrap(element).get('nb-calendar-navigation').invoke('text').then(Month => {



                        if (Month.includes(" Jan 2024 ")) {


                            cy.get('nb-calendar-day-cell').contains('17').click()
                            val = false;


                        }


                        
                    })

                    //invoke property
                    cy.contains('nb-card', 'Common Datepicker').find('input').invoke('prop','value').should('contain','Jan 17, 2024')  



                    
                    navigateTo.Forms("Form Layouts")

                    // invoke class

                    cy.contains('nb-card' , "Basic form").find('nb-checkbox').click().find('.custom-checkbox').invoke('attr','class').then( classvalue =>{

                        expect(classvalue).to.contain('checked')
                    })

            });

        })




    })
})