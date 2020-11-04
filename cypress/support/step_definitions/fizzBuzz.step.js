const {
  Before,
  After,
  Given,
  Then,
} = require("cypress-cucumber-preprocessor/steps");

import { FizzBuzzPage } from "../pages/FizzBuzzPage";

// this will get called before each scenario
let page;
Before(() => {
  page = new FizzBuzzPage();
  cy.wait(1000);
});

Then(`{string} が表示される`, (value) => {
  cy.get("#app-fizz-buzz-counter-counter").should("have.value", value);
});

Given("インクリメントする", () => {
  Cypress._.range(0, 2).forEach(() => page.increamnet());
});

Given("デクリメントする", () => {
  Cypress._.range(0, 1).forEach(() => page.decrement());
});

Given("テーブルを選択する", () => {
  page.tab2();
});

Then("1から100までのパターンが表示される", () => {
  cy.get("thead > tr > :nth-child(1)").should("contain", "1");
  cy.get("tbody > :nth-child(1) > :nth-child(10)").should("contain", "Buzz");
});

Given(`タイプ {string} を選択する`, (type) => {
  page.select(type);
});

Then("3ならばFizz,5ならばBuzz,15ならばFizzBuzzが表示される", () => {
  cy.get("tbody > :nth-child(1) > :nth-child(3)").should("contain", "Fizz");
  cy.get("tbody > :nth-child(1) > :nth-child(5)").should("contain", "Buzz");
  cy.get("tbody > :nth-child(2) > :nth-child(5)").should("contain", "FizzBuzz");
});

Then("3ならば3,5ならば5,15ならば15が表示される", () => {
  cy.get("tbody > :nth-child(1) > :nth-child(3)").should("contain", "3");
  cy.get("tbody > :nth-child(1) > :nth-child(5)").should("contain", "5");
  cy.get("tbody > :nth-child(2) > :nth-child(5)").should("contain", "15");
});

Then("3ならば3,5ならば5,15ならばFizzBuzzが表示される", () => {
  cy.get("tbody > :nth-child(1) > :nth-child(3)").should("contain", "3");
  cy.get("tbody > :nth-child(1) > :nth-child(5)").should("contain", "5");
  cy.get("tbody > :nth-child(2) > :nth-child(5)").should("contain", "FizzBuzz");
});
