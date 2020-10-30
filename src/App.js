export class App {
  constructor() {
    const result = FizzBuzz.generate(5);
    console.log(result);
    document.getElementById("app").innerHTML = result;
  }
}

export class FizzBuzz {
  static generate(number) {
    let result = number.toString();
    if (number % 3 === 0) {
      result = "Fizz";
    } else if (number % 5 === 0) {
      result = "Buzz";
    }
    return result;
  }
}
