
export class Datepickerclass{

 PickaDate(Monthparam,dayparam){

    cy.contains('nb-card','Common Datepicker').then( datepicker => {

        cy.wrap(datepicker).find('nb-card-body').then(datepickerbody =>{

            cy.wrap(datepickerbody).find('input').click()

            dateselector()

            function dateselector() {


                cy.get('nb-calendar-navigation').invoke('attr','ng-reflect-date').then( datedata =>{

                    if(!datedata.includes(Monthparam)){
                    cy.get('[data-name="chevron-right"]').click()
                    dateselector()
                    }
    
                    else{
    
                        cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]').contains(dayparam).click()
                    }
    
    
                   })
            }


        
        });


    })


    
 }

}

export const datepickerobj =  new Datepickerclass()