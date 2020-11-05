export class App {
  constructor() {
    document.getElementById("app").innerHTML = FizzBuzz.generate(1);
  }
}

export class FizzBuzz {
  static generate(number) {
    return number.toString();
  }
}
