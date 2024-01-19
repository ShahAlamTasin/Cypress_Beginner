

/// <reference  types= "cypress" />   
import {navigateTo} from '../support/PageObject/NavigationPageObject'

describe('this is a test suite for Datepicker ', () =>{

    beforeEach("Steps before each test case", () => {

 
        cy.visit('/')

        navigateTo.Forms('Datepicker')
        
    })
   
    it("Test Case for Datepicker" , ()=>{


     

        let date =  new Date()

        date.setDate(date.getDate()+ 49)

        var  futureday = date.getDate()

    

        var futuremonth =  date.toLocaleString('default',{month:'short'})

        cy.contains('nb-card','Common Datepicker').then( datepicker => {

            cy.wrap(datepicker).find('nb-card-body').then(datepickerbody =>{

                cy.wrap(datepickerbody).find('input').click()

                dateselector()

                function dateselector() {


                    cy.get('nb-calendar-navigation').invoke('attr','ng-reflect-date').then( datedata =>{

                        if(!datedata.includes(futuremonth)){
                        cy.get('[data-name="chevron-right"]').click()
                        dateselector()
                        }
        
                        else{
        
                            cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]').contains(futureday).click()
                        }
        
        
                       })
                }

  
            
            });


        })


    })
       

  
})