import { range } from "./utilities";

export class FizzBuzz {
  static MAX_NUMBER = 100;
  static FIZZ = "Fizz";
  static BUZZ = "Buzz";
  private _list: string[];
  private _type: FizzBuzzType;

  constructor(type: number = 1) {
    this._list = [];
    this._type = FizzBuzz.create(type);
  }

  public get list() {
    return this._list;
  }

  public get type() {
    return this._type;
  }

  public static create(type: number): any {
    switch (type) {
      case 1:
        return new FizzBuzzType01();
      case 2:
        return new FizzBuzzType02();
      case 3:
        return new FizzBuzzType03();
      default:
        throw "該当するタイプは存在しません";
    }
  }

  generate(n: number): string {
    return this._type.generate(n);
  }

  generateList(): void {
    this._list = range(1, FizzBuzz.MAX_NUMBER).map((i) =>
      this._type.generate(i)
    );
  }
}

export abstract class FizzBuzzType {
  isFizz(n: number) {
    return n % 3 === 0;
  }
  isBuzz(n: number) {
    return n % 5 === 0;
  }
  isFizzBuzz(n: number) {
    return n % 3 === 0 && n % 5 === 0;
  }

  abstract generate(n: number): string;
}

export class FizzBuzzType01 extends FizzBuzzType {
  generate(n: number): string {
    if (this.isFizzBuzz(n)) return `${FizzBuzz.FIZZ}${FizzBuzz.BUZZ}`;
    if (this.isFizz(n)) return FizzBuzz.FIZZ;
    if (this.isBuzz(n)) return FizzBuzz.BUZZ;

    return n.toString();
  }
}
export class FizzBuzzType02 extends FizzBuzzType {
  generate(n: number): string {
    return n.toString();
  }
}
export class FizzBuzzType03 extends FizzBuzzType {
  generate(n: number): string {
    if (this.isFizzBuzz(n)) return `${FizzBuzz.FIZZ}${FizzBuzz.BUZZ}`;

    return n.toString();
  }
}
