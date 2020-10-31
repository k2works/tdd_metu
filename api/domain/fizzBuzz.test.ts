import { FizzBuzz } from "./fizzBuzz";

describe("FizzBuzz", () => {
    it("1を渡したら文字列1を返す", () => {
        const fizzBuzz: FizzBuzz = new FizzBuzz;
        expect(fizzBuzz.generate(1)).toEqual("1")
    })
})