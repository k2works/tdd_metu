export class FizzBuzz {
  static get MAX_NUMBER() {
    return 100;
  }

  static generate(number) {
    const isFizzBuzz = number % 15 === 0;
    const isFizz = number % 3 === 0;
    const isBuzz = number % 5 === 0;

    if (isFizzBuzz) return "FizzBuzz";
    if (isFizz) return "Fizz";
    if (isBuzz) return "Buzz";

    return number.toString();
  }

  static generateList() {
    return [...Array(this.MAX_NUMBER).keys()].map((i) =>
      FizzBuzz.generate(i + 1)
    );
  }
}
