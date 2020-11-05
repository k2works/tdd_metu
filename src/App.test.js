import { FizzBuzz } from "./App.js";

describe("FizzBuzz", () => {
  it("1ならば文字列1を返す", () => {
    expect(FizzBuzz.generate(1)).toEqual("1");
  });
});
