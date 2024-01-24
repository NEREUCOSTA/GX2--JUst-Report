import Acoes from '../../Pages/indexAcoes/indexCriarAcoes';

const acoes = new Acoes();

describe('Acessar o Menu Ações', () => {
	beforeEach(() => {
		cy.login();
		cy.selecionaPlanta();
		cy.FecharIframeDeBoasVindas();
	});

	
	it('Criar ações com sucesso', () => {
		//URL do acesso ao iFrame da página de criação de ações
		cy.visit('https://dev-geon.aperam.com/app/blank/application/actions');

		// Seleciona o campo 'Proposto por', escolhendo o primeiro nome da lista
		acoes.preencherCampoProspostoPor();

		//Seleciona o campo 'Natureza' e escolhe a primeira opção da lista
		acoes.preencherCampoNatureza();

		// Seleciona o campo 'Gerência' e escolhe a primeira opção da lista
		acoes.preencherCampoGerencia();

		//Seleciona o campo 'Responsável pela gerência' e seleciona o primeiro nome da lista
		acoes.preencherCampoResponsavelPelaGerencia();

		//Seleciona o campo 'Tag para ação', seleciona as duas primeiras tags e fecha a seleção de tags
		acoes.preencherResponsavelPelaAcao();

		//Seleciona o campo esforço
		acoes.preencherEsforco();

		//Seleciona o Impacto
		acoes.preencherImpacto();

		//Seleciona o campo 'Descrição do Problema' e passa uma descrição genérica para o campo
		acoes.preencherCampoDescricaoDoProblema();

		//Seleciona o campo 'Lista de Ações (Ação Melhoria)' e passa uma descrição genérica para o campo
		acoes.preencherCampoListaDeAcoes();

		//Clica no butão de envio para realizar o envio da nova ação
		acoes.submitFormularioDeNovaAcao();

		//Verifica a mensagem de retorno para o usuário e clica no
		acoes.verificaMensagemDeAcaoCriadaComSucesso();
	});
});
