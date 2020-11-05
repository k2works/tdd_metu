import { sum, FizzBuzz } from "./App.js";

describe("FizzBuzz", () => {
  it("挨拶する", () => {
    expect(FizzBuzz.greeting()).toEqual("hello world");
  });
});
