import { range } from "./utilities";

export class FizzBuzz {
  static MAX_NUMBER = 100;
  static FIZZ = "Fizz";
  static BUZZ = "Buzz";
  private _list: FizzBuzzList;
  private _type: FizzBuzzType;

  constructor(type: FizzBuzzType) {
    this._list = new FizzBuzzList([]);
    this._type = type;
  }

  public get list() {
    return this._list;
  }

  public get type() {
    return this._type;
  }

  generate(n: number): FizzBuzzValue {
    return this._type.generate(n);
  }

  generateList(): void {
    this._list = this._list.add(
      range(1, FizzBuzz.MAX_NUMBER).map((i) => this._type.generate(i))
    );
  }
}

export abstract class FizzBuzzType {
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
      return new FizzBuzzValue(n, `${FizzBuzz.FIZZ}${FizzBuzz.BUZZ}`);
    if (this.isFizz(n)) return new FizzBuzzValue(n, FizzBuzz.FIZZ);
    if (this.isBuzz(n)) return new FizzBuzzValue(n, FizzBuzz.BUZZ);

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
      return new FizzBuzzValue(n, `${FizzBuzz.FIZZ}${FizzBuzz.BUZZ}`);

    return new FizzBuzzValue(n, n.toString());
  }
}

export class FizzBuzzValue {
  private _number: number;
  private _value: string;

  constructor(n: number, value: string) {
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
  private _value: FizzBuzzValue[];

  constructor(list: FizzBuzzValue[]) {
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
  execute(n: number): string;
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
