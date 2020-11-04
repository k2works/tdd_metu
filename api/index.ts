import { FizzBuzzListCommand } from "./application/fizzBuzzListCommand";
import { FizzBuzzValueCommand } from "./application/fizzBuzzValueCommand";
import { FizzBuzzType, FizzBuzzTypeEnum } from "./domain/type/fizzBuzzTypeEnum";
import express from "express";
const app = express();

app.get("/api", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const fizzBuzz = new FizzBuzzListCommand(
    FizzBuzzTypeEnum.valueOf(FizzBuzzType.Type01)
  );
  res.send(fizzBuzz.execute(100));
});

app.get("/api/select/:number", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  const { number } = req.params;

  const n: any = number;
  const command = new FizzBuzzListCommand(
    FizzBuzzTypeEnum.valueOf(parseInt(n, 10))
  );
  res.send(command.execute(100));
});

app.get("/api/counter/:number", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  const { number } = req.params;

  const n: any = number;
  const command = new FizzBuzzValueCommand(
    FizzBuzzTypeEnum.valueOf(FizzBuzzType.Type01)
  );
  const result: string = command.execute(parseInt(n, 10));
  res.send({ value: result });
});

export default app;
