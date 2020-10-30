console.log("App.js: loaded");
export class App {
  constructor() {
    const result = FizzBuzz.greeting();
    console.log(result);
    document.getElementById("app").innerHTML = result;
  }
}

export class FizzBuzz {
  static greeting() {
    return "hello world";
  }
}
