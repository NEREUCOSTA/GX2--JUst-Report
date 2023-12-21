class Eventos {
	static preencherFormularioEventos() {
		// Seleciona e preenche o campo Nature Ocurrance
		cy.get('div > [view_id="selectNaturet"] > div > select').select(
			'Segurança'
		);

		//Seleciona o campo 'Identify by' e passa o primeiro da lista
		// cy.get('div > [view_id="comboIdResponsible"] > div > input')

		// Seleciona o campo 'descrição' e passando uma descrição
		cy.get('div > [view_id="textareaDescription"] > div').type(
			'fiação solta no banheiro'
		);

		// Seleciona ocampo 'gestão'
		cy.get('div > [view_id="selectIdManagementArea"] > div > select').select(
			'HR - Hot Rolling'
		);

		// Seleciona o campo 'responsável'
		cy.get('div > [view_id="comboCodTempResp"] > div > input')
			.type('289439 - ABDELHAMID RABAH')
			.should('have.value', '289439 - ABDELHAMID RABAH');

		// Seleciona o campo 'instalação'
		cy.get('div > [view_id="selectInstallationId"] > div > select').select(
			'INSTALAÇÃO RC2'
		);

		// Seleciona o campo 'sub-área'
		cy.get('div > [view_id="selectIdSubArea"] > div > select').select(
			'Sub-Area Principal'
		);

		// Seleciona o o campo 'type of event'
		cy.get('div > [radio_id="QA"]').click();

		//Seleciona o campo 'Immediate action'
		cy.get('div > [view_id="inputImmedianteAction"] > div > input').type(
			'Ação imediata necessária'
		);

		// Seleciona o campo 'Action proposal'
		cy.get(
			'div > [view_id="textareaProposalAction"] > div > [name="proposalAction"]'
		).type('Proposta de ação para solução do evento');

		//Clica no botão 'criar' para enviar o formulário
		cy.get('button.webix_button').contains('Criar').click();

		cy.get('.webix_popup_text > span');
		cy.get('.webix_popup_text > span', { timeout: 3000 })
			.invoke('text')
			.then((textoDoElemento) => {
				let eventoID;
				// Usando uma expressão regular para extrair o ID do evento
				const match = textoDoElemento.match(
					/Evento (\d+) successfully created/
				);

				cy.log(match[1]);

				// Verificando se houve correspondência e armazenando o ID do evento
				eventoID = match ? match[1] : null;

				cy.get('.webix_popup_button > div').contains('OK').click();
				cy.log(eventoID);
				return eventoID;
			});
	}

	static validaCriacaoDeEvento(eventoID) {
		cy.get('div > [role="gridcell"]').contains(`${eventoID}`);
	}
}

export default Eventos;
