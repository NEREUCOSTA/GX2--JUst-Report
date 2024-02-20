class Acoes {
	preencherCampoProspostoPor() {
		Cypress.on('uncaught:exception', (err, runnable) => {
			return false;
		});
		cy.wait(7000);
		cy.get('div[view_id="comboIdIndentify"] > div > input')
			.should('be.visible')
			.click();
		cy.get(
			'body > div:nth-child(22) > div > div.webix_win_body > div > div > div:nth-child(1)'
		).click();
	}

	preencherCampoNatureza() {
		cy.get('div[view_id="selectNaturet"] select').select('Meio Ambiente');
	}

	preencherCampoGerencia() {
		// Seleciona o campo 'Gerência' e escolhe a primeira opção da lista..

		cy.get('div[view_id="comboIdManagement"]>div>input').click();
		cy.get('div[view_id="$suggest7_list"] > div [tabindex="0"]').click();
	}

	preencherCampoResponsavelPelaGerencia() {
		cy.get('div[view_id="comboIdResponsible"] > div > input').click();
		cy.get('div[view_id="$suggest8_list"] >div > div')
			.contains('289439 - ABDELHAMID RABAH')
			.should('be.visible')
			.click();
	}

	preencherResponsavelPelaAcao() {
		cy.get('div[view_id="comboIdResponsibleForAction"] > div > input').click();
		cy.get(
			'[view_id="$suggest9"] > .webix_win_content > .webix_win_body > .webix_view > .webix_scroll_cont > [webix_l_id="45592"]'
		).click();
	}

	preencherEsforco() {
		cy.get('div[view_id="selectEffort"] > div > select').select('Baixo');
	}

	preencherImpacto() {
		cy.get('div[view_id="selectImpact"] > div > select').select('Baixo');
	}

	preencherCampoDescricaoDoProblema() {
		//Seleciona o campo 'Descrição do Problema' e passa uma descrição genérica para o campo
		cy.get('div.webix_el_box textarea.webix_inp_textarea[aria-required="true"]')
			.first()
			.should('be.visible')
			.type('Descrição genérica de problema para realizar testes E2E');
	}

	preencherCampoListaDeAcoes() {
		//Seleciona o campo 'Lista de Ações (Ação Melhoria)' e passa uma descrição genérica para o campo
		cy.get('div.webix_el_box textarea.webix_inp_textarea[aria-required="true"]')
			.last()
			.should('be.visible')
			.type('Descrição genérica de lista de ações para realizar teste E2E');
	}

	submitFormularioDeNovaAcao() {
		//Clica no butão de envio para realizar o envio da nova ação
		cy.get('button').contains('Criar Ação').should('be.visible').click();
	}

	verificaMensagemDeAcaoCriadaComSucesso() {
		//Verifica a mensagem de retorno para o usuário e clica no
		cy.get('.webix_popup_text > span')
			.should('be.visible')
			.invoke('text')
			.should('include', 'Proposta')
			.and('include', 'Successfully Created');
		cy.get('.webix_popup_button > div')
			.contains('OK')
			.should('be.visible')
			.click();
	}
}

export default Acoes;
