import { FizzBuzz } from "./fizzBuzz.js";

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
