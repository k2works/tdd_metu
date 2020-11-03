import { NowRequest, NowResponse } from "@vercel/node";
import { FizzBuzzListCommand } from "./application/fizzBuzzListCommand";
import { FizzBuzzType01 } from "./domain/type/fizzBuzzType";

export default function (req: NowRequest, res: NowResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const fizzBuzz = new FizzBuzzListCommand(new FizzBuzzType01());
  res.send(fizzBuzz.execute(100));
}
