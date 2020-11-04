export class App {
  constructor(params) {
    this._apiUrl = params.apiUrl;
    this.render();
  }

  render() {
    this.renderCounter(1);
    this.renderSelect();
    this.fetchList().then((list) => this.renderTable(list));
  }

  fetchList() {
    const fizzBuzzList = (resolve, reject) => {
      fetch(this._apiUrl)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    };
    return new Promise(fizzBuzzList);
  }

  fetchCounter(counter) {
    const apiUrl = `${this._apiUrl}/counter?number=${counter}`;
    const fizzBuzzCounter = (resolve, reject) => {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => resolve(data.value))
        .catch((error) => reject(error));
    };
    return new Promise(fizzBuzzCounter);
  }

  fetchSelect(number) {
    const apiUrl = `${this._apiUrl}/select?number=${number}`;
    const fizzBuzzSelect = (resolve, reject) => {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    };
    return new Promise(fizzBuzzSelect);
  }

  renderCounter(initial) {
    let counter = initial;
    const incrementEvent = (e) => {
      counter = counter + 1;
      this.fetchCounter(counter).then(
        (data) => (document.getElementById("counter").value = data)
      );
    };
    const decrementEvent = (e) => {
      if (counter === 0) return;
      counter = counter - 1;
      this.fetchCounter(counter).then(
        (data) => (document.getElementById("counter").value = data)
      );
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
    const changeEvent = (e) => {
      const number = e.target.value;
      this.fetchSelect(number).then((data) => this.renderTable(data));
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
