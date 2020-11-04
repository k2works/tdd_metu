import { FizzBuzzListCommand } from "../../../api/application/fizzBuzzListCommand";
import { FizzBuzzValue } from "../../../api/domain/model/fizzBuzzValue";
import { FizzBuzzType } from "../../../api/domain/type/fizzBuzzTypeEnum";
import { FizzBuzzType01 } from "../../../api/domain/type/fizzBuzzType01";
import { FizzBuzzTypeEnum } from "../../../api/domain/type/fizzBuzzTypeEnum";

describe("FizzBuzzListCommand", () => {
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

  describe("例外ケース", () => {
    it("100より多い数を許可しない", () => {
      const command = new FizzBuzzListCommand(
        FizzBuzzTypeEnum.valueOf(FizzBuzzType.Type01)
      );
      expect(() => command.execute(101)).toThrow("最大値は100");
    });
  });
});
