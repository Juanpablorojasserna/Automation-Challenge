describe('Complete Checkout Flow (With Login)', () => {
  it('logs in, fills out buyer and payment info, and completes the order', () => {
    // Step 0: Log in
    cy.visit('https://www.laboratoriodetesting.com/auth/login');

    cy.get('input[name="email"]').type('huge.test@gmail.com');
    cy.get('input[name="password"]').type('Huge2025.');

    cy.get('button[data-at="submit-login"]')
      .should('not.be.disabled')
      .click();

    cy.url().should('not.include', '/auth/login');

    // Step 1: Add product to cart
    cy.visit('https://www.laboratoriodetesting.com');
    cy.contains('article', 'Bandas Elásticas de Resistencia')
      .find('button')
      .contains('Añadir al carrito')
      .click();

    cy.get('button[data-at="cart-opener-mobile"]').click();
    cy.contains('button', 'Ir al checkout').click();

    cy.url().should('include', '/checkout');

    // Step 2: Fill buyer info
    cy.get('input[name="name"]').type('John');
    cy.get('input[name="lastname"]').type('Doe');
    cy.get('input[name="email"]').clear().type('huge.test@gmail.com');
    cy.get('input[name="address"]').type('123 Calle Primavera');
    cy.get('select[name="country"]').select('Colombia');

    // Step 3: Fill payment info
    cy.get('input[name="nameHolder"]').type('John Doe');
    cy.get('input[name="cardNumber"]').type('4301822375925071');
    cy.get('input[name="expiryDate"]').type('2029-09');
    cy.get('input[name="securityCode"]').type('668');

    // Step 4: Submit payment
    cy.contains('button', 'Completar Pago')
      .should('not.be.disabled')
      .click();

    // Step 5: Assert order confirmation modal appears
    cy.get('.swal2-popup.swal2-modal.swal2-icon-success')
      .should('be.visible');

    cy.get('#swal2-title')
      .should('contain.text', 'Orden creada');

    cy.get('#swal2-html-container')
      .should('contain.text', 'Tu orden se ha creado con éxito');
  });
});

