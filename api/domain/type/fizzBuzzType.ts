import { FizzBuzzValue } from "../model/fizzBuzzValue";

export abstract class FizzBuzzType {
  static TYPE_01 = 1;
  static TYPE_02 = 2;
  static TYPE_03 = 3;
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

  public static create(type: number): any {
    switch (type) {
      case FizzBuzzType.TYPE_01:
        return new FizzBuzzType01();
      case FizzBuzzType.TYPE_02:
        return new FizzBuzzType02();
      case FizzBuzzType.TYPE_03:
        return new FizzBuzzType03();
      default:
        return new FizzBuzzTypeNotDefined();
    }
  }

  abstract generate(n: number): FizzBuzzValue;
}

export class FizzBuzzType01 extends FizzBuzzType {
  generate(n: number): FizzBuzzValue {
    if (this.isFizzBuzz(n))
      return new FizzBuzzValue(n, `${FizzBuzzType.FIZZ}${FizzBuzzType.BUZZ}`);
    if (this.isFizz(n)) return new FizzBuzzValue(n, FizzBuzzType.FIZZ);
    if (this.isBuzz(n)) return new FizzBuzzValue(n, FizzBuzzType.BUZZ);

    return new FizzBuzzValue(n, n.toString());
  }
}

export class FizzBuzzType02 extends FizzBuzzType {
  generate(n: number): FizzBuzzValue {
    return new FizzBuzzValue(n, n.toString());
  }
}

export class FizzBuzzType03 extends FizzBuzzType {
  generate(n: number): FizzBuzzValue {
    if (this.isFizzBuzz(n))
      return new FizzBuzzValue(n, `${FizzBuzzType.FIZZ}${FizzBuzzType.BUZZ}`);

    return new FizzBuzzValue(n, n.toString());
  }
}

export class FizzBuzzTypeNotDefined extends FizzBuzzType {
  generate(n: number): FizzBuzzValue {
    return new FizzBuzzValue(n, "");
  }

  toString(): string {
    return "未定義";
  }
}
