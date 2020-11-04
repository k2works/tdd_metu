import { FizzBuzzCommand } from "../../../api/application/fizzBuzzCommand";
import { FizzBuzzValueCommand } from "../../../api/application/fizzBuzzValueCommand";
import { FizzBuzzType } from "../../../api/domain/type/fizzBuzzTypeEnum";
import { FizzBuzzType01 } from "../../../api/domain/type/fizzBuzzType01";
import { FizzBuzzType02 } from "../../../api/domain/type/fizzBuzzType02";
import { FizzBuzzType03 } from "../../../api/domain/type/fizzBuzzType03";
import { FizzBuzzTypeEnum } from "../../../api/domain/type/fizzBuzzTypeEnum";

describe("FizzBuzzValueCommand", () => {
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
      const fizzBuzz = FizzBuzzTypeEnum.valueOf(99);

      expect(fizzBuzz.toString()).toEqual("未定義");
    });
  });

  describe("例外ケース", () => {
    it("値は正の値のみ許可する", () => {
      const command = new FizzBuzzValueCommand(
        FizzBuzzTypeEnum.valueOf(FizzBuzzType.Type01)
      );
      expect(() => command.execute(-1)).toThrow("値は正のみ");
    });
  });
});
