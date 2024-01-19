

function   ReUsableCode(targetelement){


    cy.wrap(targetelement).find('.expand-state g g').invoke('attr','data-name').then( attrvalue =>{

        if(attrvalue.includes('chevron-down')){

        }
        else {

            cy.wrap(targetelement).click()
        }
    })



}



export class NavigationObject {

    

     Layout(element){

          
     cy.contains('a',"Layout").then( target =>{
        cy.wrap(target).click()

        ReUsableCode(target)

     })
     cy.contains(element).click();

    }

    Forms (element){
        cy.contains('a',"Forms").then( target =>{
            cy.wrap(target).click()
    
            ReUsableCode(target)
    
         })
         cy.contains(element).click();

    }

     Modal_Overlays  (element){

        cy.contains('a',"Modal & Overlays").then( target =>{
            cy.wrap(target).click()
    
            ReUsableCode(target)
    
         })
         cy.contains(element).click();


    }

     Extra_Component (element){


        cy.contains('a',"Extra Components").then( target =>{
            cy.wrap(target).click()
    
            ReUsableCode(target)
    
         })
         cy.contains(element).click();
    }

    Tables_Data (element){


        cy.contains('a',"Tables & Data").then( target =>{
            cy.wrap(target).click()
    
            ReUsableCode(target)
    
         })
         cy.contains(element).click();
    }

    Auth(element){

        cy.contains('a',"Auth").then( target =>{
            cy.wrap(target).click()
    
            ReUsableCode(target)
    
         })
         cy.contains(element).click();
    }

}

export const navigateTo =  new NavigationObject()