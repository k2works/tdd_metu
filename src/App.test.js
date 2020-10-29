import { greeting } from "./App.js";

describe("HelloTest", () => {
  it("greeting", () => {
    expect(greeting()).toEqual("hello world");
  });
});
