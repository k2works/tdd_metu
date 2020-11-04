export class App {
  constructor(params) {
    this._apiUrl = params.apiUrl;
    this.render();
  }

  async render() {
    const fetchList = () => {
      const fizzBuzzList = (resolve, reject) => {
        fetch(this._apiUrl)
          .then((response) => response.json())
          .then((data) => resolve(data))
          .catch((error) => reject(error));
      };
      return new Promise(fizzBuzzList);
    };

    this.renderCounter(1);
    this.renderSelect();
    const list = await fetchList();
    this.renderTable(list);
  }

  renderCounter(initial) {
    const fetchCounter = (counter) => {
      const apiUrl = `${this._apiUrl}/counter?number=${counter}`;
      const fizzBuzzCounter = (resolve, reject) => {
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => resolve(data.value))
          .catch((error) => reject(error));
      };
      return new Promise(fizzBuzzCounter);
    };

    let counter = initial;
    const incrementEvent = async (e) => {
      counter = counter + 1;
      document.getElementById("counter").value = await fetchCounter(counter);
    };
    const decrementEvent = async (e) => {
      if (counter === 0) return;
      counter = counter - 1;
      document.getElementById("counter").value = await fetchCounter(counter);
    };

    const contents = `
      <input id="counter" disabled="true" value=${counter}>
      <button id="increment">+</button>
      <button id="decrement">-</button>
    `;
    document.getElementById("app-counter").innerHTML = contents;
    document
      .getElementById("increment")
      .addEventListener("click", incrementEvent);
    document
      .getElementById("decrement")
      .addEventListener("click", decrementEvent);
  }

  renderSelect() {
    const fetchSelect = (number) => {
      const apiUrl = `${this._apiUrl}/select?number=${number}`;
      const fizzBuzzSelect = (resolve, reject) => {
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => resolve(data))
          .catch((error) => reject(error));
      };
      return new Promise(fizzBuzzSelect);
    };

    const changeEvent = async (e) => {
      const number = e.target.value;
      const list = await fetchSelect(number);
      this.renderTable(list);
    };

    const contents = `
    <select id="selectEvent">
      <option value="1">タイプ1</option>
      <option value="2">タイプ2</option>
      <option value="3">タイプ3</option>
    </select>
    `;
    document.getElementById("app-select").innerHTML = contents;
    document
      .getElementById("selectEvent")
      .addEventListener("change", changeEvent);
  }

  renderTable(list) {
    const table = (() => {
      const header = [...Array(10).keys()]
        .map((i) => `<td>${i + 1}</td>`)
        .join("");
      const body = [...Array(10).keys()]
        .map((i) => (i == 0 ? 0 : i * 10))
        .map((j) =>
          [...Array(10).keys()]
            .map((k) => `<td>${list[k + j]._value}</td>`)
            .join("")
        );

      return `
            <table>
              <thead bgcolor="darkgray">
                <tr>
                ${header}
                </tr>
              </thead>
              <tbody bgcolor="ivory">
                <tr>${body[0]}</tr>
                <tr>${body[1]}</tr>
                <tr>${body[2]}</tr>
                <tr>${body[3]}</tr>
                <tr>${body[4]}</tr>
                <tr>${body[5]}</tr>
                <tr>${body[6]}</tr>
                <tr>${body[7]}</tr>
                <tr>${body[8]}</tr>
                <tr>${body[9]}</tr>
              </tbody>
            </table>
      `;
    })();

    const contents = `<div>${table}</div>`;
    document.getElementById("app-table").innerHTML = contents;
  }
}
