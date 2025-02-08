/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/

describe("Test Suite 1", () => {
  beforeEach(() => {
    //Optional
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err);
      return false;
    });
    cy.visit("https://www.99.co/singapore");
  });

  it("Test Case 1", () => {
    //Write your automation script here for Test Case 1
    cy.contains('Featured projects').should('be.visible');
    cy.contains('Popular projects').should('be.visible');
    cy.contains('Find your property value instantly').should('be.visible');
    cy.contains('Listings with videos').should('be.visible');
    cy.contains('Popular listings').should('be.visible');
    cy.contains('Featured stories').should('be.visible');
    cy.contains('Listings found only on 99').should('be.visible');
    cy.contains('Latest New Launches').should('be.visible');
    cy.contains('Explore 99.co').should('be.visible');
  });

  it("Test Case 2", () => {
    //Optional
  });

  it("Test Case 3", () => {
    //Optional
  });
});
