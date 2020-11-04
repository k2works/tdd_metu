import { Counter as counterComponent } from "./component/Counter.js";
import { Select as selectComponent } from "./component/Select.js";
import { Table as tableComponent } from "./component/Table.js";

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
    const component = counterComponent(this._apiUrl, initial);
    document.getElementById("app-counter").innerHTML = component.contents;
    document
      .getElementById("increment")
      .addEventListener("click", component.incrementEvent);
    document
      .getElementById("decrement")
      .addEventListener("click", component.decrementEvent);
  }

  renderSelect() {
    const component = selectComponent(this._apiUrl, this.renderTable);
    document.getElementById("app-select").innerHTML = component.contents;
    document
      .getElementById("selectEvent")
      .addEventListener("change", component.changeEvent);
  }

  renderTable(list) {
    const component = tableComponent(list);
    document.getElementById("app-table").innerHTML = component.contents;
  }
}
