class CriarEventos {
	static criarEventoSeguranca() {
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

		// Seleciona o campo 'Severidade da lesão'
		cy.get('div > [view_id="selectSeverityOfInjury"] > div > select').select(
			'Insignificante / Apenas Desconforto'
		);
		// Seleciona o campo 'Exposição'
		cy.get('div > [view_id="selectExposure"] > div > select').select(
			'1 / Year'
		);
		// Seleciona o campo 'Turno'
		cy.get('div > [view_id="selectShift"] > div > select').select(
			'<4h / Turno'
		);
		// Seleciona o campo 'Probabilidade'
		cy.get('div > [view_id="selectProbability"] > div > select').select(
			'Improvável (Possível ignorar)'
		);

		//Seleciona o campo 'Immediate action'
		cy.get('div > [view_id="inputImmedianteAction"] > div > input').type(
			'Ação imediata necessária'
		);

		// Seleciona o campo 'Action proposal'
		cy.get(
			'div > [view_id="textareaProposalAction"] > div > [name="proposalAction"]'
		).type('Proposta de ação para solução do evento');

		//Clica no botão 'concluir evento' para enviar o formulário
		cy.get('button.webix_button').contains('Concluir evento').click();

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
				cy.get('.webix_popup_button > div').contains('OK').click();

				cy.intercept(
					'GET',
					'https://dev-geon.aperam.com/app/blank/application/tables/event-follow'
				).as('eventFollowRequest');

				cy.visit(
					'https://dev-geon.aperam.com/app/blank/application/tables/event-follow'
				);

				cy.wait('@eventFollowRequest').then((interception) => {
					// Verifica se a resposta contém uma página HTML
					expect(interception.response.body).to.include('<html');

					// Espera até que a página esteja completamente carregada
					cy.document().its('readyState').should('eq', 'complete');
				});

				cy.get('div > [role="gridcell"]').contains(`${eventoID}`);
			});
	}

	static criarEventoMeioAmbiente() {}

	static criarEventoRiscoIndustrial() {
		// Seleciona e preenche o campo Nature Ocurrance
		cy.get('div > [view_id="selectNaturet"] > div > select').select(
			'Risco Industrial'
		);

		// Seleciona o campo 'descrição' e passando uma descrição
		cy.get('div > [view_id="textareaDescription"] > div').type(
			'Risco Industrial Identificado'
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

		//Clica no botão 'concluir evento' para enviar o formulário
		cy.get('button.webix_button').contains('Concluir evento').click();

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
				cy.get('.webix_popup_button > div').contains('OK').click();

				cy.intercept(
					'GET',
					'https://dev-geon.aperam.com/app/blank/application/tables/event-follow'
				).as('eventFollowRequest');

				cy.visit(
					'https://dev-geon.aperam.com/app/blank/application/tables/event-follow'
				);

				cy.wait('@eventFollowRequest').then((interception) => {
					// Verifica se a resposta contém uma página HTML
					expect(interception.response.body).to.include('<html');

					// Espera até que a página esteja completamente carregada
					cy.document().its('readyState').should('eq', 'complete');
				});

				cy.get('div > [role="gridcell"]').contains(`${eventoID}`);
			});
	}
}

export default CriarEventos;
