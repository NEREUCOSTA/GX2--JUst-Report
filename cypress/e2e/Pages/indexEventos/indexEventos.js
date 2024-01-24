class Eventos {
	static preencherFormularioEventos() {
		// Seleciona e preenche o campo Nature Ocurrance
		cy.get('div > [view_id="selectNaturet"] > div > select').select(
			'Segurança'
		);

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

		// Recebe o popup de evento criado com sucesso, armazena o ID do evento criado e busca na lista de eventos pelo ID recuperado
		cy.get('.webix_popup_text > span')
			.invoke('text')
			.then((textoDoElemento) => {
				const match = textoDoElemento.match(
					/Evento (\d+) successfully created/
				);
				const eventoID = match ? match[1] : null;
				return eventoID;
			})
			//Fecha o popup de evento criado com sucesso e busca o evento na lista de eventos pelo ID recuperado
			.then((eventoID) => {
				cy.get('.webix_popup_button > div').contains('OK').click();

				cy.get('div > [role="gridcell"]').contains(`${eventoID}`);
			});
	}
}

export default Eventos;
