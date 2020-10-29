export class App {
  constructor() {
    const result = FizzBuzz.generateList();
    console.log(result);

    const header = [...Array(10).keys()]
      .map((i) => `<th>${i + 1}</th>`)
      .join("");

    const td = [...Array(10).keys()]
      .map((i) => (i + 1) * 10)
      .map((j) =>
        [...Array(10).keys()]
          .map((k) => `<td>${FizzBuzz.generate(k + j)}</td>`)
          .join("")
      );

    const table = () => {
      return `
        <table>
          <thead>
          <tr>
            ${header}
          </tr>
          </thead>
          <tbody>
            <tr>${td[0]}</t>
            <tr>${td[1]}</t>
            <tr>${td[2]}</t>
            <tr>${td[3]}</t>
            <tr>${td[4]}</t>
            <tr>${td[5]}</t>
            <tr>${td[6]}</t>
            <tr>${td[7]}</t>
            <tr>${td[8]}</t>
            <tr>${td[9]}</t>
          </tbody>
        </table>
        `;
    };

    document.getElementById("app").innerHTML = table(header);
  }
}

export class FizzBuzz {
  static get MAX_NUMBER() {
    return 100;
  }

  static generate(number) {
    const isFizzBuzz = number % 15 === 0;
    const isFizz = number % 3 === 0;
    const isBuzz = number % 5 === 0;

    if (isFizzBuzz) return "FizzBuzz";
    if (isFizz) return "Fizz";
    if (isBuzz) return "Buzz";

    return number.toString();
  }

  static generateList() {
    return [...Array(this.MAX_NUMBER).keys()].map((i) =>
      FizzBuzz.generate(i + 1)
    );
  }
}
