import { FizzBuzz } from "./App.js";

describe("FizzBuzzTest", () => {
  it("1を渡したら文字列1を返す", () => {
    expect(FizzBuzz.generate(1)).toEqual("1");
  });
});
