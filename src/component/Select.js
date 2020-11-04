export const Select = (apiUrl, renderTable) => {
  const baseApiUrl = apiUrl;
  const fetchSelect = (number) => {
    const apiUrl = `${baseApiUrl}/select/${number}`;
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
    renderTable(list);
  };

  const contents = `
    <select id="app-fizz-buzz-table-select">
      <option value="1">タイプ1</option>
      <option value="2">タイプ2</option>
      <option value="3">タイプ3</option>
    </select>
    `;

  return { contents, changeEvent };
};
