import { FizzBuzz } from "./App.js";

describe("FizzBuzzTest", () => {
  let fizzBuzz;
  beforeEach(() => {
    fizzBuzz = FizzBuzz;
  });

  it("1を渡したら文字列1を返す", () => {
    expect(fizzBuzz.generate(1)).toEqual("1");
  });

  it("2を渡したら文字列2を返す", () => {
    expect(fizzBuzz.generate(2)).toEqual("2");
  });

  it("3を渡したら文字列Fizzを返す", () => {
    expect(fizzBuzz.generate(3)).toEqual("Fizz");
  });
});
