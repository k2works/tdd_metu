import { range } from "./utilities";

export class FizzBuzz {
  static MAX_NUMBER = 100;
  static FIZZ = "Fizz";
  static BUZZ = "Buzz";

  generate(n: number, type: number = 1): string {
    const isFizzBuzz = n % 3 === 0 && n % 5 === 0;
    const isFizz = n % 3 === 0;
    const isBuzz = n % 5 === 0;

    switch (type) {
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

  generateList(): string[] {
    return range(1, FizzBuzz.MAX_NUMBER).map((i) => this.generate(i));
  }
}
