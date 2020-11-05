export class App {
  constructor() {
    document.getElementById("app").innerHTML = FizzBuzz.greeting();
  }
}

export class FizzBuzz {
  static greeting() {
    return "hello world";
  }
}
