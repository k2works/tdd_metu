export class App {
  constructor() {
    console.log(greeting());
    document.getElementById("app").innerHTML = greeting();
  }
}

export const greeting = () => {
  return "hello world";
};
