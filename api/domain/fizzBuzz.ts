import { range } from "./utilities";

export class FizzBuzz {
  static MAX_NUMBER = 100;
  static FIZZ = "Fizz";
  static BUZZ = "Buzz";
  public list: string[];
  public type: number;

  constructor(type: number = 1) {
    this.list = [];
    this.type = type;
  }

  generate(n: number): string {
    const isFizzBuzz = n % 3 === 0 && n % 5 === 0;
    const isFizz = n % 3 === 0;
    const isBuzz = n % 5 === 0;

    switch (this.type) {
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
    this.list = range(1, FizzBuzz.MAX_NUMBER).map((i) => this.generate(i));
  }
}
