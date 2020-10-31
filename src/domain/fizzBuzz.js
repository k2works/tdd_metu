export class FizzBuzz {
  static get MAX_NUMBER() {
    return 100;
  }
  static get FIZZ() {
    return "Fizz";
  }
  static get BUZZ() {
    return "Buzz";
  }

  static generate(number) {
    const isFizzBuzz = number % 3 === 0 && number % 5 === 0;
    const isFizz = number % 3 === 0;
    const isBuzz = number % 5 === 0;

    if (isFizzBuzz) return `${this.FIZZ}${this.BUZZ}`;
    if (isFizz) return this.FIZZ;
    if (isBuzz) return this.BUZZ;

    return number.toString();
  }

  static generateList() {
    return [...Array(this.MAX_NUMBER).keys()].map((i) =>
      FizzBuzz.generate(i + 1)
    );
  }
}
