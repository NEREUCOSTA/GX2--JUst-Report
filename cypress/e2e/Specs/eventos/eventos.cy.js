import CriarEventos from '../../Pages/indexEventos/indexCriarEventos';
describe('Acessar o Menu Evento', () => {
	beforeEach(() => {
		cy.login();
		cy.selecionaPlanta();
		cy.FecharIframeDeBoasVindas();
	});
	it('Criar um evento Seguranca', () => {
		cy.visit(
			'https://dev-geon.aperam.com/app/blank/application/occurrence/occurrence'
		);
		CriarEventos.criarEventoSeguranca();
	});

	it('Criar evento Meio Ambiente', () => {
		cy.visit('https://dev-geon.aperam.com/app/blank/application/occurrence/occurrence')
	});

	it('Criar evento Risco Industrial', () => {
		cy.visit(
			'https://dev-geon.aperam.com/app/blank/application/occurrence/occurrence'
		);

		CriarEventos.criarEventoRiscoIndustrial();
	});
});
