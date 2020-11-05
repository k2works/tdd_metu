import { util } from "chai";
import { FizzBuzz } from "./App.js";

describe("FizzBuzz", () => {
  let fizzBuzz;
  beforeEach(() => {
    fizzBuzz = FizzBuzz;
  });
  it("1ならば文字列1を返す", () => {
    expect(fizzBuzz.generate(1)).toEqual("1");
  });
  it("2ならば文字列2を返す", () => {
    expect(fizzBuzz.generate(2)).toEqual("2");
  });

  it("3ならば文字列Fizzを返す", () => {
    expect(fizzBuzz.generate(3)).toEqual("Fizz");
  });

  it("6ならば文字列Fizzを返す", () => {
    expect(fizzBuzz.generate(6)).toEqual("Fizz");
  });

  it("5 ならばBuzzを返す", () => {
    expect(fizzBuzz.generate(5)).toEqual("Buzz");
  });

  it("15 ならばFizzBuzzを返す", () => {
    expect(fizzBuzz.generate(15)).toEqual("FizzBuzz");
  });

  it("配列の先頭は1を返す", () => {
    const result = fizzBuzz.print1To100();

    expect(result[0]).toEqual("1");
  });

  it("配列の最後は100を返す", () => {
    const result = fizzBuzz.print1To100();

    expect(result[result.length - 1]).toEqual("100");
  });
});
