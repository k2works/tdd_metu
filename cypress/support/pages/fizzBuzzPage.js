/* eslint-disable no-undef */
import { BasePage } from "../basePage";

export class FizzBuzzPage extends BasePage {
  constructor() {
    super();
    this._appId = "app-fizz-buzz";
    this._counterAppId = "app-fizz-buzz-counter";
    this._tableAppId = "app-fizz-buzz-table";
  }

  visit() {
    cy.visit(this._url);
  }

  increamnet() {
    cy.get(`#${this._counterAppId}-increment`).click();
  }

  decrement() {
    cy.get(`#${this._counterAppId}-decrement`).click();
  }

  select(type) {
    cy.get(`#${this._tableAppId}-select`).select(type);
  }
}
