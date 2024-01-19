export class Basicform{

     formfillup(formemail,formpass){

        cy.contains('nb-card','Basic form').find('form').then(formelement =>{

            cy.wrap(formelement).find('[placeholder="Email"]').type(formemail)
            cy.wrap(formelement).find('[placeholder="Password"]').type(formpass)
            cy.wrap(formelement).find('[type="checkbox"]').check({force:true})
          //  cy.wrap(formelement).find('[type="submit"]').click()
            cy.wrap(formelement).submit();
        })

      //  cy.get('nb-card').contains('Basic form').then(formelement =>{})
    }

}

export const formobj =  new  Basicform()