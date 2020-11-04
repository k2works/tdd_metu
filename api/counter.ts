import { NowRequest, NowResponse } from "@vercel/node";
import { FizzBuzzValueCommand } from "./application/fizzBuzzValueCommand";
import { FizzBuzzType, FizzBuzzTypeEnum } from "./domain/type/fizzBuzzTypeEnum";

export default function (req: NowRequest, res: NowResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  const n: any = req.query.number;
  const command = new FizzBuzzValueCommand(
    FizzBuzzTypeEnum.valueOf(FizzBuzzType.Type01)
  );
  const result: string = command.execute(parseInt(n, 10));
  res.send({ value: result });
}
