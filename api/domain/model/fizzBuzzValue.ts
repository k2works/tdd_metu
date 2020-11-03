export class FizzBuzzValue {
  private _number: number;
  private _value: string;

  constructor(n: number, value: string) {
    if (n < 0) throw "値は正のみ";
    this._number = n;
    this._value = value;
  }
  public get number() {
    return this._number;
  }
  public get value() {
    return this._value;
  }
  equals(other: FizzBuzzValue) {
    return this.number === other.number && this.value === other.value;
  }
}
