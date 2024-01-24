# GX2--JUst-Report

# Automação de Testes com Cypress

Este projeto contém os testes automatizados desenvolvidos com o framework Cypress.


### 📋 Pré-requisitos

Certifique-se de ter as seguintes dependências instaladas em sua máquina:

```
Node.js (versão 12 ou superior)
Cypress (versão 8.0.0 ou superior)

```

## ⚙️ Instalacao do Projeto
Clone este repositório HTTPS: git clone 

## ⚙️ Instale as dependências do projeto:
Comandos Linha terminal:

01 - npm install
02 - npm install cypress

## ⚙️ Configrando arquivo cypress.config.js
Trocar as informacoes conforme o seu projeto


baseUrl:

Obs: A baseUrl tem que ser inserida a url do site que voce vai automatizar

## ⚙️ Executando os testes Local
Comandos Linha terminal:

01 - npx cypress open

## ⚙️ Executando Testes Regressivos Cypress Cloud

01 - npx cypress run --spec "cypress/e2e/features/Regressivo/Regressivo.feature" --record --key d7cf8ccd-c607-4dfc-978e-8370c5568414



## ⚙️ Estrutura do Projeto
├── cypress/
│   ├── fixtures/            # Arquivos de dados para testes
│   ├── e2e/                 # Testes automatizados
│   ├── plugins/             # Configurações adicionais do Cypress
│   ├── support/             # Funções de apoio e configurações
│   └── videos/              # Gravações de vídeo dos testes (opcional)
├── .gitignore               # Arquivos a serem ignorados pelo Git
├── cypress.json             # Configurações globais do Cypress
└── package.json             # Dependências e scripts do projeto


## 📌 Versões das ferramentas utlizadas

"@badeball/cypress-cucumber-preprocessor": "^17.0.0",
"@bahmutov/cypress-esbuild-preprocessor": "^2.2.0",
"cypress": "^12.14.0",
 "faker": "^5.5.3",
"faker-br": "^0.4.1"

## ✒️ Autores

* **Nereu Costa Nogueira** -



