export const Select = (apiUrl, renderTable) => {
  const baseApiUrl = apiUrl;
  const fetchSelect = (number) => {
    const apiUrl = `${baseApiUrl}/select?number=${number}`;
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
    <select id="selectEvent">
      <option value="1">タイプ1</option>
      <option value="2">タイプ2</option>
      <option value="3">タイプ3</option>
    </select>
    `;

  return { contents, changeEvent };
};
