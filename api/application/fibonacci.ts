import { FibonacciAlgorithm } from "../domain/model/fibonacciAlgorithm";
import { Command } from "./command";

export class Fibonacci implements Command {
  private _algorithm: FibonacciAlgorithm;

  constructor(algorithm: FibonacciAlgorithm) {
    this._algorithm = algorithm;
  }
  exec(number: number): bigint {
    if (number > 100) throw "100以上は計算できません";

    return this._algorithm.calc(number);
  }
}
