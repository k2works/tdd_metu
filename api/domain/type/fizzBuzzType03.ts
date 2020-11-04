import { FizzBuzzValue } from "../model/fizzBuzzValue";
import { FizzBuzzType } from "./fizzBuzzType";

export class FizzBuzzType03 extends FizzBuzzType {
  generate(n: number): FizzBuzzValue {
    if (this.isFizzBuzz(n))
      return new FizzBuzzValue(n, `${FizzBuzzType.FIZZ}${FizzBuzzType.BUZZ}`);

    return new FizzBuzzValue(n, n.toString());
  }
}
