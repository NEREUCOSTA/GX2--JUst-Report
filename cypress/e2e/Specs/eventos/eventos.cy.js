import Eventos from '../../Pages/indexEventos/indexEventos';
describe('Acessar o Menu Evento', () => {
	beforeEach(() => {
		cy.login();
		cy.selecionaPlanta();
		cy.FecharIframeDeBoasVindas();
	});
	it('Criar um evento com sucesso', () => {
		cy.visit(
			'https://dev-geon.aperam.com/app/blank/application/occurrence/occurrence'
		);
		Eventos.preencherFormularioEventos();
	});
});
