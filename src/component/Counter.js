export const Counter = (apiUrl, initial) => {
  const baseApiUrl = apiUrl;
  let counter = initial;

  const fetchCounter = (counter) => {
    const apiUrl = `${baseApiUrl}/counter?number=${counter}`;
    const fizzBuzzCounter = (resolve, reject) => {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => resolve(data.value))
        .catch((error) => reject(error));
    };
    return new Promise(fizzBuzzCounter);
  };

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
  return { contents, incrementEvent, decrementEvent };
};
