import AcoesPendentes from '../../Pages/indexAcoes/indexAcoesPendentes'


const acoesPendentes = new AcoesPendentes();
describe('Acessar o Menu Acoes Pendentes', () => {
    beforeEach(() => {
		cy.login();
		cy.selecionaPlanta();
		cy.FecharIframeDeBoasVindas();
   });
    it('aprovar uma ação pendente', () => {
      cy.visit('https://dev-geon.aperam.com/app/blank/application/actions/list/pending-actions')
    
      // clica no botão Aprovar e concluir
      acoesPendentes.clicarNoBotaoAprovar();
      acoesPendentes.clicarNoBotaoConcluir();
         
	   })
})