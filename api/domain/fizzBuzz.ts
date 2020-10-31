export class FizzBuzz {
  generate(n: number): string {
    if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
    if (n % 3 === 0) return "Fizz";
    if (n % 5 === 0) return "Buzz";

    return n.toString();
  }

  generateList(): string[] {
    let result: string[] = [];

    for (let i: number = 1; i <= 100; i++) {
      result.push(this.generate(i));
    }

    return result;
  }
}
