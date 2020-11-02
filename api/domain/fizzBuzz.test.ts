import { FizzBuzz } from "./fizzBuzz";

describe("FizzBuzz", () => {
  describe("タイプ1の場合", () => {
    let fizzBuzz: FizzBuzz;
    beforeEach(() => {
      fizzBuzz = new FizzBuzz();
    });
    describe("三の倍数の場合", () => {
      it("3を渡したら文字列Fizzを返す", () => {
        expect(fizzBuzz.generate(3)).toEqual("Fizz");
      });
    });
    describe("五の倍数の場合", () => {
      it("5を渡したら文字列Buzzを返す", () => {
        expect(fizzBuzz.generate(5)).toEqual("Buzz");
      });
    });
    describe("三と五の倍数の場合", () => {
      it("15を渡したら文字列FizzBuzzを返す", () => {
        expect(fizzBuzz.generate(15)).toEqual("FizzBuzz");
      });
    });
    describe("その他の場合", () => {
      it("1を渡したら文字列1を返す", () => {
        expect(fizzBuzz.generate(1)).toEqual("1");
      });
      it("2を渡したら文字列2を返す", () => {
        expect(fizzBuzz.generate(2)).toEqual("2");
      });
    });

    describe("1から100までの数の配列を返す", () => {
      let result: string[];
      beforeEach(() => {
        result = fizzBuzz.generateList();
      });
      it("配列の初めは文字列の1を返す", () => {
        expect(result[0]).toEqual("1");
      });
      it("配列の最後は文字列のBuzzを返す", () => {
        expect(result[result.length - 1]).toEqual("Buzz");
      });
      it("配列の4番目は文字列のBuzzを返す", () => {
        expect(result[4]).toEqual("Buzz");
      });
      it("配列の14番目は文字列のFizzBuzzを返す", () => {
        expect(result[14]).toEqual("FizzBuzz");
      });
    });
  });

  describe("タイプ2の場合", () => {
    let fizzBuzz: FizzBuzz;
    beforeEach(() => {
      fizzBuzz = new FizzBuzz();
    });
    describe("三の倍数の場合", () => {
      it("3を渡したら文字列3を返す", () => {
        expect(fizzBuzz.generate(3, 2)).toEqual("3");
      });
    });

    describe("五の倍数の場合", () => {
      it("5を渡したら文字列5を返す", () => {
        expect(fizzBuzz.generate(5, 2)).toEqual("5");
      });
    });
    describe("三と五の倍数の場合", () => {
      it("15を渡したら文字列15を返す", () => {
        expect(fizzBuzz.generate(15, 2)).toEqual("15");
      });
    });
    describe("その他の場合", () => {
      it("1を渡したら文字列1を返す", () => {
        expect(fizzBuzz.generate(1, 2)).toEqual("1");
      });
    });
  });

  describe("タイプ3の場合", () => {
    let fizzBuzz: FizzBuzz;
    beforeEach(() => {
      fizzBuzz = new FizzBuzz();
    });
    describe("三の倍数の場合", () => {
      it("3を渡したら文字列3を返す", () => {
        expect(fizzBuzz.generate(3, 3)).toEqual("3");
      });
    });

    describe("五の倍数の場合", () => {
      it("5を渡したら文字列5を返す", () => {
        expect(fizzBuzz.generate(5, 3)).toEqual("5");
      });
    });
    describe("三と五の倍数の場合", () => {
      it("15を渡したら文字列FizzBuzzを返す", () => {
        expect(fizzBuzz.generate(15, 3)).toEqual("FizzBuzz");
      });
    });
    describe("その他の場合", () => {
      it("1を渡したら文字列1を返す", () => {
        expect(fizzBuzz.generate(1, 3)).toEqual("1");
      });
    });
  });

  describe("それ以外のタイプの場合", () => {
    let fizzBuzz: FizzBuzz;
    beforeEach(() => {
      fizzBuzz = new FizzBuzz();
    });

    it("例外を発生する", () => {
      expect(() => fizzBuzz.generate(1, 99)).toThrow(
        "該当するタイプは存在しません"
      );
    });
  });
});
