import { NowRequest, NowResponse } from "@vercel/node";
import { FizzBuzz, FizzBuzzType01 } from "./domain/fizzBuzz";

export default function (req: NowRequest, res: NowResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const fizzBuzz = new FizzBuzz(new FizzBuzzType01());
  fizzBuzz.generateList();
  res.send(fizzBuzz.list);
}
