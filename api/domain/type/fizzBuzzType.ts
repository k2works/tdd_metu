import { FizzBuzzValue } from "../model/fizzBuzzValue";

export abstract class FizzBuzzType {
  static FIZZ = "Fizz";
  static BUZZ = "Buzz";

  isFizz(n: number) {
    return n % 3 === 0;
  }
  isBuzz(n: number) {
    return n % 5 === 0;
  }
  isFizzBuzz(n: number) {
    return n % 3 === 0 && n % 5 === 0;
  }

  abstract generate(n: number): FizzBuzzValue;
}
