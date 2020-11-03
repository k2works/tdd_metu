import { FizzBuzzList } from "../domain/model/fizzBuzzList";
import { FizzBuzzValue } from "../domain/model/fizzBuzzValue";
import { FizzBuzzType } from "../domain/type/fizzBuzzType";
import { range } from "../domain/utilities";
import { FizzBuzzCommand } from "./fizzBuzzCommand";

export class FizzBuzzListCommand implements FizzBuzzCommand {
  private _type: FizzBuzzType;

  constructor(type: FizzBuzzType) {
    this._type = type;
  }
  execute(n: number): FizzBuzzValue[] {
    const list = range(1, n).map((i) => this._type.generate(i));
    return new FizzBuzzList(list).value;
  }
}
