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

  it("Test Case 1", () => {
    //Write your automation script here for Test Case 1
  });

  it("Test Case 2", () => {
    //Optional
  });

  it("Test Case 3", () => {
    //Optional
  });
});
