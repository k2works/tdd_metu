export class App {
  constructor(params) {
    const apiUrl = params.apiUrl;
    this._apiUrl = apiUrl;
    this.render();
  }

  render() {
    this.select();
    this.loading(this._apiUrl, this.table);
  }

  select() {
    const changeEvent = (e) => {
      const number = e.target.value;
      const apiUrl = `${this._apiUrl}/select?number=${number}`;
      this.loading(apiUrl, this.table);
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

  table(list) {
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

  loading(apiUrl, table) {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => table(data))
      .catch((error) => console.error(error));
  }
}
