/// <reference types="cypress" />

describe('Testes para a página de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/');
    })

    it('Deve levar o usuário para o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click();

        cy.get('input').should('have.length', 7);

        cy.screenshot('tela-inscricao');
    })
    it('Deve prencher o formulário de inscrição e enviá-lo', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click();

        cy.get('input[name="nome-completo"]').type('Eduardo Augusto');
        cy.get('input[name="email"]').type('EduardoAugusto@teste.com');
        cy.get('input[name="telefone"]').type('49 12121212');
        cy.get('input[name="endereco"]').type('Rua Testes, Bairro Cypress, WebInternet-COM');
        cy.get('select[name="escolaridade"]').select('medio-completo');
        cy.get('#mac').check();
        cy.get('.Aplicacao_button__tw2AE').click();

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })

        cy.screenshot('tela-inscricao-preenchida');
    })
})