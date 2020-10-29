import { FizzBuzz } from "./App.js";

describe("FizzBuzz", () => {
  let fizzBuzz;
  beforeEach(() => {
    fizzBuzz = FizzBuzz;
  });

  describe("三の倍数の場合", () => {
    it("3を渡したら文字列Fizzを返す", () => {
      expect(fizzBuzz.generate(3)).toEqual("Fizz");
    });
  });
  describe("五の倍数の場合", () => {
    it("5を渡したら文字列Buzzを返す", () => {
      expect(fizzBuzz.generate(5)).toEqual("Buzz");
    });
  });
  describe("三と五の倍数の場合", () => {
    it("15を渡したらFizzBuzzを返す", () => {
      expect(fizzBuzz.generate(15)).toEqual("FizzBuzz");
    });
  });
  describe("その他の場合", () => {
    it("1を渡したら文字列1を返す", () => {
      expect(fizzBuzz.generate(1)).toEqual("1");
    });

    it("2を渡したら文字列2を返す", () => {
      expect(fizzBuzz.generate(2)).toEqual("2");
    });
  });
});
