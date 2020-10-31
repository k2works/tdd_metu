export class FizzBuzz {
  generate(n: number): string {
    let result: string = n.toString();
    if (n % 3 === 0 && n % 5 === 0) {
      result = "FizzBuzz";
    } else if (n % 3 === 0) {
      result = "Fizz";
    } else if (n % 5 === 0) {
      result = "Buzz";
    }
    return result;
  }

  print1To100(): string[] {
    return ["1", "2", "3"];
  }
}
