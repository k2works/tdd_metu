export interface FizzBuzzCommand {
  execute(n: number): any;
}

export const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (v, k) => k + start);
