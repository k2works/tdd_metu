import { FizzBuzzValue } from "../model/fizzBuzzValue";
import { FizzBuzzType } from "./fizzBuzzType";

export class FizzBuzzType01 extends FizzBuzzType {
  generate(n: number): FizzBuzzValue {
    if (this.isFizzBuzz(n))
      return new FizzBuzzValue(n, `${FizzBuzzType.FIZZ}${FizzBuzzType.BUZZ}`);
    if (this.isFizz(n)) return new FizzBuzzValue(n, FizzBuzzType.FIZZ);
    if (this.isBuzz(n)) return new FizzBuzzValue(n, FizzBuzzType.BUZZ);

    return new FizzBuzzValue(n, n.toString());
  }
}
