import { FizzBuzzValue } from "../model/fizzBuzzValue";
import { FizzBuzzType } from "./fizzBuzzType";

export class FizzBuzzTypeNotDefined extends FizzBuzzType {
  generate(n: number): FizzBuzzValue {
    return new FizzBuzzValue(n, "");
  }

  toString(): string {
    return "未定義";
  }
}
