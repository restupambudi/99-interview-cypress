/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/

describe("Test Suite 3", () => {
  beforeEach(() => {
    //Optional
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err);
      return false;
    });

    cy.intercept('GET', '**/ads/*', { statusCode: 204, body: '' }).as('blockAds');
    cy.intercept('GET', '**/popup/*', { statusCode: 204, body: '' }).as('blockPopup');

    cy.visit("https://www.99.co/singapore");
    cy.get('._2dHwl').contains('Buy').should('be.visible');
    cy.get('._2dHwl').contains('Rent').should('be.visible');
  });

  it("Verify buy filters", () => {
    //Write your automation script here for Test Case 1
    cy.get('._2dHwl').contains('Buy').click();
    cy.contains('Price range').should('be.visible');
    cy.contains('Property type').should('be.visible');
    cy.contains('Bedrooms').should('be.visible');
  });

  it("Should filter based on price", () => {
    //Write your automation script here for Test Case 1
    cy.get('._2dHwl').contains('Buy').click();
    cy.get('._2383q').eq(0).click();

    cy.get('#wiz-iframe-intent') // Replace with actual iframe selector
      .its('0.contentDocument.body').should('not.be.empty') // Ensure iframe is loaded
      .then(cy.wrap) // Wrap the body so Cypress can interact with it
      .find('.InterstitialClose') // Find the close button inside iframe
      .click({ force: true });

    cy.contains('$100,000').click();
    cy.wait(2000); // Waits for 2 seconds
    cy.get('.Ow5IS.OznyQ').type('500000');
    cy.get('[data-cy="search"]').click();
    cy.contains('$400,000').should('be.visible');
    cy.contains('$50,000').should('not.exist');
  });

  it("Should filter based on property type", () => {
    //Write your automation script here for Test Case 1
    cy.get('._2dHwl').contains('Buy').click();
    cy.get('._2383q').eq(1).click();

    cy.get('#wiz-iframe-intent') // Replace with actual iframe selector
      .its('0.contentDocument.body').should('not.be.empty') // Ensure iframe is loaded
      .then(cy.wrap) // Wrap the body so Cypress can interact with it
      .find('.InterstitialClose') // Find the close button inside iframe
      .click({ force: true });

    cy.get('._2NcKP').contains('HDB').click();
    cy.get('[data-cy="search"]').click();
    cy.get('.SeoTopSection_topBlurbParagraph__0sTQA').contains('HDB').should('be.visible');
  });

  it("Should filter based on bedrooms number", () => {
    //Write your automation script here for Test Case 1
    cy.get('._2dHwl').contains('Buy').click();
    cy.get('._2383q').eq(2).click();

    cy.get('#wiz-iframe-intent') // Replace with actual iframe selector
      .its('0.contentDocument.body').should('not.be.empty') // Ensure iframe is loaded
      .then(cy.wrap) // Wrap the body so Cypress can interact with it
      .find('.InterstitialClose') // Find the close button inside iframe
      .click({ force: true });

    cy.get('._2NcKP').contains('2 Bedroom').click();
    cy.get('[data-cy="search"]').click();
    cy.contains('2 Beds').should('be.visible');
  });

  it("Verify Rent filters", () => {
    //Optional
    cy.get('._2dHwl').contains('Rent').click();
    cy.contains('Price range').should('be.visible');
    cy.contains('Property type').should('be.visible');
    cy.contains('Bedrooms').should('be.visible');
    cy.contains('Rental type').should('be.visible');
  });

  it("Should filter based on rental type", () => {
    //Write your automation script here for Test Case 1
    cy.get('._2dHwl').contains('Rent').click();

    cy.get('#wiz-iframe-intent') // Replace with actual iframe selector
    .its('0.contentDocument.body').should('not.be.empty') // Ensure iframe is loaded
    .then(cy.wrap) // Wrap the body so Cypress can interact with it
    .find('.InterstitialClose') // Find the close button inside iframe
    .click({ force: true });

    cy.get('._2383q').eq(3).click();

    cy.get('._2NcKP').contains('Entire unit').click();
    cy.get('[data-cy="search"]').click();
    cy.contains('Master Room').should('be.visible');
  });

});
