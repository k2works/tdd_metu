export class App {
  constructor() {
    const result = FizzBuzz.print1To100();
    console.log(result);
    document.getElementById("app").innerHTML = result;
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
    let result = [];
    for (let i = 1; i <= 100; i++) {
      result.push(i.toString());
    }
    return result;
  }
}
