import { NowRequest, NowResponse } from "@vercel/node";
import { FizzBuzzListCommand, FizzBuzzType01 } from "./domain/fizzBuzz";

export default function (req: NowRequest, res: NowResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const fizzBuzz = new FizzBuzzListCommand(new FizzBuzzType01());
  res.send(fizzBuzz.execute(100));
}
