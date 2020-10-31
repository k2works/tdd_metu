import { NowRequest, NowResponse } from "@vercel/node";
import { FizzBuzz } from "./domain/fizzBuzz";

export default function (req: NowRequest, res: NowResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const fizzBuzz = new FizzBuzz();
  res.send(fizzBuzz.generateList());
}
