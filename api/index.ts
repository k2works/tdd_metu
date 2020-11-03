import { NowRequest, NowResponse } from "@vercel/node";
import { FizzBuzzListCommand } from "./application/fizzBuzzListCommand";
import { FizzBuzzType, FizzBuzzTypeEnum } from "./domain/type/fizzBuzzTypeEnum";

export default function (req: NowRequest, res: NowResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const fizzBuzz = new FizzBuzzListCommand(
    FizzBuzzTypeEnum.valueOf(FizzBuzzType.Type01)
  );
  res.send(fizzBuzz.execute(100));
}
