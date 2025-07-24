E2E Automation – Laboratorio de Testing

Proyect Automation Strategy: https://docs.google.com/document/d/1rAiWjq2a8sCdDoAb9HfHP0VLMxR_2ylmLR2PVKIDldQ/edit?usp=sharing

This project contains end-to-end automated tests for the e-commerce platform [Laboratorio de Testing](https://www.laboratoriodetesting.com), built using **Cypress**.

What’s Covered

- ✅ Add product to shopping cart  
- ✅ Complete checkout with buyer and payment info  
- ✅ Login flow (required for checkout)  
- ✅ Order confirmation modal validation  

Tech Stack

- Cypress 14.x  
- JavaScript (ES6)  
- Page Object Model (planned)  

How to Run Tests

```bash
npx cypress open
npx cypress run --spec cypress/e2e/checkout.cy.js

