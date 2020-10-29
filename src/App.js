export class App {
  constructor() {
    const result = FizzBuzz.generate(1);
    console.log(result);
    document.getElementById("app").innerHTML = result;
  }
}

export class FizzBuzz {
  static generate(number) {
    let result = number.toString();
    if (number % 3 === 0) {
      result = "Fizz";
    }
    return result;
  }
}
