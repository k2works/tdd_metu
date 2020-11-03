import { FizzBuzzType } from "../domain/type/fizzBuzzType";
import { FizzBuzzCommand } from "./fizzBuzzCommand";

export class FizzBuzzValueCommand implements FizzBuzzCommand {
  private _type: FizzBuzzType;

  constructor(type: FizzBuzzType) {
    this._type = type;
  }
  execute(n: number): string {
    return this._type.generate(n).value;
  }
}
