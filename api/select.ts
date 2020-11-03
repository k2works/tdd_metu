import { NowRequest, NowResponse } from "@vercel/node";
import { FizzBuzzListCommand } from "./application/fizzBuzzListCommand";
import { FizzBuzzType, FizzBuzzTypeEnum } from "./domain/type/fizzBuzzTypeEnum";

export default function (req: NowRequest, res: NowResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  const n: any = req.query.number;
  const command = new FizzBuzzListCommand(
    FizzBuzzTypeEnum.valueOf(parseInt(n, 10))
  );
  res.send(command.execute(100));
}
