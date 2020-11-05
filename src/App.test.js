import { FizzBuzz } from "./App.js";

describe("FizzBuzz", () => {
  it("1ならば文字列1を返す", () => {
    expect(FizzBuzz.generate(1)).toEqual("1");
  });
  it("2ならば文字列2を返す", () => {
    expect(FizzBuzz.generate(2)).toEqual("2");
  });

  it("3ならば文字列Fizzを返す", () => {
    expect(FizzBuzz.generate(3)).toEqual("Fizz");
  });

  it("6ならば文字列Fizzを返す", () => {
    expect(FizzBuzz.generate(6)).toEqual("Fizz");
  });
});
