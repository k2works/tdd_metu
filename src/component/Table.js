export const Table = (list) => {
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
  return { contents };
};
