export class App {
  constructor() {
    const result = FizzBuzz.generate(1);
    console.log(result);
    document.getElementById("app").innerHTML = result;
  }
}

export class FizzBuzz {
  static generate() {
    return "1";
  }
}
