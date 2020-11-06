import { App } from "./src/App.js";
import { setUp } from "./src/Dev.js";

let app;
if (process.env.NODE_ENV === "production") {
  app = new App({ apiUrl: "/api" });
  app.render();
  setUp();
} else {
  app = new App({ apiUrl: "http://localhost:3000/api" });
  app.render();
  setUp();
}
