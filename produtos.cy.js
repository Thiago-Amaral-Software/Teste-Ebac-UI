/// <reference types='cypress' />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="block-inner"]')
            //.first()
            //.last()
            //.eq(4)
            .contains('Aero Daily Fitness Tee')
            .click()
    });

    it.only(' Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3
        cy.get('.post-2559 > .product-block > .caption > .meta > .infor > .name > a').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' x “Abominable Hoodie” foram adicionados no seu carrinho]')
        

    });
});

