describe('Add Product to Cart', () => {
  it('should allow the user to add a product to the cart and verify its presence', () => {
    // Step 1: Visit the home page
    cy.visit('https://www.laboratoriodetesting.com');

    // Step 2: Find the product and add it to cart
    cy.contains('article', 'Bandas Elásticas de Resistencia')
      .find('button')
      .contains('Añadir al carrito')
      .click();

    // Step 3: Verify that the cart icon shows a quantity > 0
    cy.get('span.flex.absolute.-mt-5.ml-4')
      .find('span.bg-pink-500')
      .should('contain.text', '1');

    // Step 4: Click on cart button to open drawer
    cy.get('button[data-at="cart-opener-mobile"]').click();

    // Step 5: Confirm cart drawer has the correct product
    cy.get('.cart-items')
      .should('be.visible')
      .within(() => {
        cy.contains('p.text-black', 'Bandas Elásticas de Resistencia').should('exist');
        cy.contains('p.text-black', '1').should('exist');
      });
  });
});

