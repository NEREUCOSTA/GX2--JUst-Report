import { LoginPage } from '../e2e/Pages/indexLogin/indexLogin';

const login = new LoginPage();


// -- This is a parent command --
Cypress.Commands.add('login', () => {
	cy.visit('/');
	login.preencherEmail();
	login.preencherSenha();
	login.clicarEntrar();
});
Cypress.Commands.add('FecharIframeDeBoasVindas', () => {
	cy.get('iframe').should('be.visible');

	cy.get('iframe[src="/blank/application/tables/select-default-settings"]').as(
		'WelcomeIframe'
	);
	cy.frameLoaded('@WelcomeIframe');
	cy.wait(7000); // Aguardar o carregamento do iframe

	cy.get('@WelcomeIframe').then(($iframe) => {
		cy.frameLoaded('@WelcomeIframe');
		const body = $iframe.contents().find('body');
		cy.wrap(body)
  		.wait(11000)
  		.find('button>span[class="webix_icon fa fa-close"]')
  		.as('closeButton')  // Salva um alias para o botão
  		.should('be.visible')
  		.click();

// Agora use o alias em comandos subsequentes
		cy.get('@closeButton').should('not.exist');  // Exemplo de continuação

		// cy.wrap(body)
		// 	.wait(11000)
		// 	.find('button>span[class="webix_icon fa fa-close"]')
		// 	.should('be.visible')
		// 	.click();
	});
});
Cypress.Commands.add('selecionaPlanta', () => {
	cy.iframe('iframe').should('be.visible');

	//seleciona a Plant
	cy.iframe()
		.find('select[aria-required="true"]')
		.eq(0)
		.invoke('removeAttr', 'disabled')
		.select('10');
	cy.iframe().find('select[aria-required="true"]').eq(1).select('pt-BR');
	cy.iframe().find('button[type="button"]').click();
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
