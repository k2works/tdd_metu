export class App {
  constructor() {
    const result = FizzBuzz.generate(15);
    console.log(result);
    document.getElementById("app").innerHTML = result;
  }
}

export class FizzBuzz {
  static generate(number) {
    let result = number.toString();

    if (number % 15 === 0) return "FizzBuzz";
    if (number % 3 === 0) return "Fizz";
    if (number % 5 === 0) return "Buzz";

    return result;
  }

  static generateList() {
    let result = [];

    for (let i = 1; i <= 100; i++) {
      result.push(FizzBuzz.generate(i));
    }

    return result;
  }
}
