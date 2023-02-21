///<reference types="cypress" />

context('Funcionalidade de Login', () => {
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  afterEach(() => {
    cy.screenshot()
  });

  it('Deve fazer login com sucesso', () => {

    cy.get('#username').type('aluno_ebac@teste.com')

    cy.get('#password').type('teste@teste.com')

    cy.get('.woocommerce-form > .button').click()

    cy.get('.page-title').should('contain', 'Minha conta')

    cy.get('.woocommerce-MyAccount-content').should('contain', 'Olá')


  })

  it('Deve exibir uma mensagem de erro ao inserir senha ou login inválido', () => {

    cy.get('#username').type('aluno@teste.com')

    cy.get('#password').type('teste@.com')

    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail aluno@teste.com está incorreta. Perdeu a senha?')

  })
})