class AcoesPendentes {
	clicarNoBotaoAprovar() {
		cy.wait(4000);
		cy.once('uncaught:exception', () => false);
		acoesPendentes.clicarNoBotaoAprovar();
		cy.get(
			'[aria-rowindex="1"] > #actionAprovaldtDtActionTrackingList'
		).click();
	}
	clicarNoBotaoConcluir() {
		cy.wait(6000);
		cy.get(
			'[view_id="$layout30"] > .webix_control > .webix_el_box > .webix_button'
		)
			.contains('Concluir Ação') // Certifique-se de que o botão contém o texto desejado, se aplicável
			.click();
	}
}

export default AcoesPendentes;
