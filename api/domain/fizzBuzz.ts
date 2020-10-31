import { range } from "./utilities";

export class FizzBuzz {
  generate(n: number): string {
    const isFizzBuzz = n % 3 === 0 && n % 5 === 0;
    const isFizz = n % 3 === 0;
    const isBuzz = n % 5 === 0;

    if (isFizzBuzz) return "FizzBuzz";
    if (isFizz) return "Fizz";
    if (isBuzz) return "Buzz";

    return n.toString();
  }

  generateList(): string[] {
    return range(1, 100).map((i) => this.generate(i));
  }
}
