import { range } from "./utilities";

export abstract class FizzBuzzType {
  static FIZZ = "Fizz";
  static BUZZ = "Buzz";
  static TYPE_01 = 1;
  static TYPE_02 = 2;
  static TYPE_03 = 3;

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
        throw "該当するタイプは存在しません";
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

export class FizzBuzzValue {
  private _number: number;
  private _value: string;

  constructor(n: number, value: string) {
    if (n < 0) throw "値は正のみ";
    this._number = n;
    this._value = value;
  }
  public get number() {
    return this._number;
  }
  public get value() {
    return this._value;
  }
  equals(other: FizzBuzzValue) {
    return this.number === other.number && this.value === other.value;
  }
}

export class FizzBuzzList {
  static MAX_NUMBER = 100;

  private _value: FizzBuzzValue[];

  constructor(list: FizzBuzzValue[]) {
    if (list.length > FizzBuzzList.MAX_NUMBER)
      throw `最大値は${FizzBuzzList.MAX_NUMBER}`;
    this._value = list;
  }

  public get value() {
    return this._value;
  }

  toString(): string {
    return this._value.toString();
  }

  add(value: FizzBuzzValue[]): FizzBuzzList {
    return new FizzBuzzList(this._value.concat(value));
  }
}

export interface FizzBuzzCommand {
  execute(n: number): any;
}

export class FizzBuzzValueCommand implements FizzBuzzCommand {
  private _type: FizzBuzzType;

  constructor(type: FizzBuzzType) {
    this._type = type;
  }
  execute(n: number): string {
    return this._type.generate(n).value;
  }
}

export class FizzBuzzListCommand implements FizzBuzzCommand {
  private _type: FizzBuzzType;

  constructor(type: FizzBuzzType) {
    this._type = type;
  }
  execute(n: number): FizzBuzzValue[] {
    const list = range(1, n).map((i) => this._type.generate(i));
    return new FizzBuzzList(list).value;
  }
}
