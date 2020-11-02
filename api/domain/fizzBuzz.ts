import { range } from "./utilities";

export class FizzBuzz {
  static MAX_NUMBER = 100;
  static FIZZ = "Fizz";
  static BUZZ = "Buzz";
  private _list: string[];
  private _type: number;

  constructor(type: number = 1) {
    this._list = [];
    this._type = type;
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
    const isFizzBuzz = n % 3 === 0 && n % 5 === 0;
    const isFizz = n % 3 === 0;
    const isBuzz = n % 5 === 0;

    switch (this._type) {
      case 1:
        if (isFizzBuzz) return `${FizzBuzz.FIZZ}${FizzBuzz.BUZZ}`;
        if (isFizz) return FizzBuzz.FIZZ;
        if (isBuzz) return FizzBuzz.BUZZ;

        return n.toString();
      case 2:
        return n.toString();
      case 3:
        if (isFizzBuzz) return `${FizzBuzz.FIZZ}${FizzBuzz.BUZZ}`;

        return n.toString();
      default:
        throw "該当するタイプは存在しません";
    }
  }

  generateList(): void {
    this._list = range(1, FizzBuzz.MAX_NUMBER).map((i) => this.generate(i));
  }
}

export class FizzBuzzType01 {
  generate(n: number): string {
    const isFizzBuzz = n % 3 === 0 && n % 5 === 0;
    const isFizz = n % 3 === 0;
    const isBuzz = n % 5 === 0;

    if (isFizzBuzz) return `${FizzBuzz.FIZZ}${FizzBuzz.BUZZ}`;
    if (isFizz) return FizzBuzz.FIZZ;
    if (isBuzz) return FizzBuzz.BUZZ;

    return n.toString();
  }
}
export class FizzBuzzType02 {
  generate(n: number): string {
    return n.toString();
  }
}
export class FizzBuzzType03 {
  generate(n: number): string {
    const isFizzBuzz = n % 3 === 0 && n % 5 === 0;

    if (isFizzBuzz) return `${FizzBuzz.FIZZ}${FizzBuzz.BUZZ}`;

    return n.toString();
  }
}
