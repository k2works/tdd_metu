export class App {
  constructor() {
    document.getElementById("app").innerHTML = FizzBuzz.print1To100();
  }
}

export class FizzBuzz {
  static generate(number) {
    let result = number.toString();
    if (number % 3 === 0 && number % 5 === 0) {
      result = "FizzBuzz";
    } else if (number % 3 === 0) {
      result = "Fizz";
    } else if (number % 5 === 0) {
      result = "Buzz";
    }
    return result;
  }

  static print1To100() {
    return [...Array(100).keys()].map((i) => FizzBuzz.generate(i + 1));
  }
}
