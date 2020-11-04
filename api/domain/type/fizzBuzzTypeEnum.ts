import { FizzBuzzType01 } from "./fizzBuzzType01";
import { FizzBuzzType02 } from "./fizzBuzzType02";
import { FizzBuzzType03 } from "./fizzBuzzType03";
import { FizzBuzzTypeNotDefined } from "./fizzBuzzTypeNotDefined";

export enum FizzBuzzType {
  Type01 = 1,
  Type02 = 2,
  Type03 = 3,
}
export namespace FizzBuzzTypeEnum {
  export function valueOf(value: FizzBuzzType) {
    switch (value) {
      case FizzBuzzType.Type01:
        return new FizzBuzzType01();
      case FizzBuzzType.Type02:
        return new FizzBuzzType02();
      case FizzBuzzType.Type03:
        return new FizzBuzzType03();
      default:
        return new FizzBuzzTypeNotDefined();
    }
  }
}
