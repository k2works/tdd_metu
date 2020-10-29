export class App {
  constructor() {
    const result = FizzBuzz.generate(15);
    console.log(result);
    document.getElementById("app").innerHTML = result;
  }
}

export class FizzBuzz {
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
    return [...Array(100).keys()].map((i) => FizzBuzz.generate(i + 1));
  }
}
