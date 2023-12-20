class Eventos {

    static preencherFormularioEventos(){
        // Seleciona e preenche o campo Nature Ocurrance
        cy.get('div > [view_id="selectNaturet"] > div > select').select("Segurança");

        //Seleciona Identify by e passa o primeiro da lista
       // cy.get('div > [view_id="comboIdResponsible"] > div > input')

       // Seleciona o campo descrição e passando uma descrição
       cy.get('div > [view_id="textareaDescription"] > div').type('fiação solta no banheiro')

       // seleciona o gestor
       cy.get('div > [view_id="selectIdManagementArea"] > div > select').select("HR - Hot Rolling")

       // seleciona o responsável
       cy.get('div > [view_id="comboCodTempResp"] > div > input').type("289439 - ABDELHAMID RABAH").should('have.value', '289439 - ABDELHAMID RABAH')

       // seleciona o instalação
       cy.get('div > [view_id="selectInstallationId"] > div > select').select("INSTALAÇÃO RC2")



    }


}

export default Eventos;