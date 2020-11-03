import { FizzBuzzValue } from "../model/fizzBuzzValue";
import { FizzBuzzType } from "./fizzBuzzType";

export class FizzBuzzType02 extends FizzBuzzType {
  generate(n: number): FizzBuzzValue {
    return new FizzBuzzValue(n, n.toString());
  }
}
