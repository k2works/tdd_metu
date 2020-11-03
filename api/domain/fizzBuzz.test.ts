import { FizzBuzzCommand } from "../application/fizzBuzzCommand";
import { FizzBuzzListCommand } from "../application/fizzBuzzListCommand";
import { FizzBuzzValueCommand } from "../application/fizzBuzzValueCommand";
import { FizzBuzzValue } from "./model/fizzBuzzValue";
import {
  FizzBuzzType,
  FizzBuzzType01,
  FizzBuzzType02,
  FizzBuzzType03,
} from "./type/fizzBuzzType";

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
    it("未定義のタイプを返す", () => {
      const fizzBuzz = FizzBuzzType.create(99);

      expect(fizzBuzz.toString()).toEqual("未定義");
    });
  });

  describe("例外ケース", () => {
    it("値は正の値のみ許可する", () => {
      const command = new FizzBuzzValueCommand(
        FizzBuzzType.create(FizzBuzzType.TYPE_01)
      );
      expect(() => command.execute(-1)).toThrow("値は正のみ");
    });

    it("100より多い数を許可しない", () => {
      const command = new FizzBuzzListCommand(
        FizzBuzzType.create(FizzBuzzType.TYPE_01)
      );
      expect(() => command.execute(101)).toThrow("最大値は100");
    });
  });
});
