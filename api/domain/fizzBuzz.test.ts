import { FizzBuzz } from "./fizzBuzz";

describe("FizzBuzz", () => {
    it("あいさつする", () :void => {
        const fizzBuzz: FizzBuzz = new FizzBuzz;
        expect(fizzBuzz.greeting()).toEqual('hello world')
    })
})