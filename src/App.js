export class App {
  constructor() {
    document.getElementById("app").innerHTML = FizzBuzz.generate(1);
  }
}

export class FizzBuzz {
  static generate(number) {
    let result = number.toString();
    if (number % 3 === 0) {
      result = "Fizz";
      if (number % 3 === 0 && number % 5 === 0) {
        result = "FizzBuzz";
      }
    } else if (number % 5 === 0) {
      result = "Buzz";
    }
    return result;
  }
}
