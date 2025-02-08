/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/

describe("Test Suite 2", () => {
  beforeEach(() => {
    //Optional
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err);
      return false;
    });
    cy.visit("https://www.99.co/singapore");
  });

  it("The link should directs to Bloomsbury Residences", () => {
    //Write your automation script here for Test Case 1
    cy.contains('Bloomsbury Residences').click();
    cy.contains('Bloomsbury Residences').should('be.visible');
    cy.url().should('include', '/bloomsbury-residences');
  });

  it("The link should directs to One Sophia / The Collective At One Sophia", () => {
    //Optional
    cy.contains('One Sophia / The Collective At One Sophia').click();
    cy.contains('One Sophia / The Collective At One Sophia').should('be.visible');
    cy.url().should('include', '/one-sophia-the-collective-at-one-sophia');
  });

  it("The link should directs to Parktown Residence", () => {
    //Optional
    cy.contains('Parktown Residence').click();
    cy.contains('Parktown Residence').should('be.visible');
    cy.url().should('include', '/parktown-residence');
  });

  it("The link should directs to ELTA", () => {
    //Optional
    cy.contains('ELTA').click();
    cy.contains('ELTA').should('be.visible');
    cy.url().should('include', '/elta');
  });

});
