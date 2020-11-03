import { FizzBuzzValue } from "./fizzBuzzValue";

export class FizzBuzzList {
  static MAX_NUMBER = 100;

  private _value: FizzBuzzValue[];

  constructor(list: FizzBuzzValue[]) {
    if (list.length > FizzBuzzList.MAX_NUMBER)
      throw `最大値は${FizzBuzzList.MAX_NUMBER}`;
    this._value = list;
  }

  public get value() {
    return this._value;
  }

  toString(): string {
    return this._value.toString();
  }

  add(value: FizzBuzzValue[]): FizzBuzzList {
    return new FizzBuzzList(this._value.concat(value));
  }
}
