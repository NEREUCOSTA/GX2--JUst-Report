import { LoginErrado, LoginPage } from "../../Pages/indexLogin/indexLogin";
const loginErrado = new LoginErrado()
const loginCerto = new LoginPage()
describe('Acessar o Front Just Report', () => {
	context('Context', () => {
		// code here

		beforeEach(() => {
			cy.visit('/');
		});
		it.only('Login com Sucesso', () => {
			// Realiza o Login
			cy.login();
			//seleciona a Planta
			cy.selecionaPlanta();
			//Fecha o iFrame de Boas vindas
			cy.FecharIframeDeBoasVindas();
		});

		it('Login com falha', () => {
			cy.visit('/');
		   loginErrado.preencherEmailErrado()
		   loginCerto.preencherSenha()
		   loginCerto.clicarEntrar()

		   
		});
	});
});


