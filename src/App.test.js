import { FizzBuzz } from "./App.js";

describe("FizzBuzz", () => {
  it("あいさつする", () => {
    expect(FizzBuzz.greeting()).toEqual("hello world");
  });
});
