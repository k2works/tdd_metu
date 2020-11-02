import {
  FizzBuzz,
  FizzBuzzCommand,
  FizzBuzzList,
  FizzBuzzListCommand,
  FizzBuzzType,
  FizzBuzzType01,
  FizzBuzzType02,
  FizzBuzzType03,
  FizzBuzzValue,
  FizzBuzzValueCommand,
} from "./fizzBuzz";

describe("FizzBuzz", () => {
  describe("タイプ1の場合", () => {
    let fizzBuzz: FizzBuzzCommand;
    beforeEach(() => {
      fizzBuzz = new FizzBuzzValueCommand(new FizzBuzzType01());
    });
    describe("三の倍数の場合", () => {
      it("3を渡したら文字列Fizzを返す", () => {
        expect(fizzBuzz.execute(3)).toEqual("Fizz");
      });
    });
    describe("五の倍数の場合", () => {
      it("5を渡したら文字列Buzzを返す", () => {
        expect(fizzBuzz.execute(5)).toEqual("Buzz");
      });
    });
    describe("三と五の倍数の場合", () => {
      it("15を渡したら文字列FizzBuzzを返す", () => {
        expect(fizzBuzz.execute(15)).toEqual("FizzBuzz");
      });
    });
    describe("その他の場合", () => {
      it("1を渡したら文字列1を返す", () => {
        expect(fizzBuzz.execute(1)).toEqual("1");
      });
      it("2を渡したら文字列2を返す", () => {
        expect(fizzBuzz.execute(2)).toEqual("2");
      });
    });

    describe("1から100までの数の配列を返す", () => {
      let result: FizzBuzzValue[];
      beforeEach(() => {
        const fizzBuzz = new FizzBuzzListCommand(new FizzBuzzType01());
        result = fizzBuzz.execute(100);
      });
      it("配列の初めは文字列の1を返す", () => {
        expect(result[0].value).toEqual("1");
      });
      it("配列の最後は文字列のBuzzを返す", () => {
        expect(result[result.length - 1].value).toEqual("Buzz");
      });
      it("配列の4番目は文字列のBuzzを返す", () => {
        expect(result[4].value).toEqual("Buzz");
      });
      it("配列の14番目は文字列のFizzBuzzを返す", () => {
        expect(result[14].value).toEqual("FizzBuzz");
      });
    });
  });

  describe("タイプ2の場合", () => {
    let fizzBuzz: FizzBuzzCommand;
    beforeEach(() => {
      fizzBuzz = new FizzBuzzValueCommand(new FizzBuzzType02());
    });
    describe("三の倍数の場合", () => {
      it("3を渡したら文字列3を返す", () => {
        expect(fizzBuzz.execute(3)).toEqual("3");
      });
    });

    describe("五の倍数の場合", () => {
      it("5を渡したら文字列5を返す", () => {
        expect(fizzBuzz.execute(5)).toEqual("5");
      });
    });
    describe("三と五の倍数の場合", () => {
      it("15を渡したら文字列15を返す", () => {
        expect(fizzBuzz.execute(15)).toEqual("15");
      });
    });
    describe("その他の場合", () => {
      it("1を渡したら文字列1を返す", () => {
        expect(fizzBuzz.execute(1)).toEqual("1");
      });
    });
  });

  describe("タイプ3の場合", () => {
    let fizzBuzz: FizzBuzzCommand;
    beforeEach(() => {
      fizzBuzz = new FizzBuzzValueCommand(new FizzBuzzType03());
    });
    describe("三の倍数の場合", () => {
      it("3を渡したら文字列3を返す", () => {
        expect(fizzBuzz.execute(3)).toEqual("3");
      });
    });

    describe("五の倍数の場合", () => {
      it("5を渡したら文字列5を返す", () => {
        expect(fizzBuzz.execute(5)).toEqual("5");
      });
    });
    describe("三と五の倍数の場合", () => {
      it("15を渡したら文字列FizzBuzzを返す", () => {
        expect(fizzBuzz.execute(15)).toEqual("FizzBuzz");
      });
    });
    describe("その他の場合", () => {
      it("1を渡したら文字列1を返す", () => {
        expect(fizzBuzz.execute(1)).toEqual("1");
      });
    });
  });

  describe("それ以外のタイプの場合", () => {
    it("例外を発生する", () => {
      expect(() => FizzBuzzType.create(99)).toThrow(
        "該当するタイプは存在しません"
      );
    });
  });
});
