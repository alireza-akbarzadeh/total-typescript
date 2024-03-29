import { a, b } from "vitest/dist/global-60f880c6";
import { number } from "zod";
import { Equal, Expect } from "../helpers/type-utils";

const addAllOfThisToWindow = {
  add: (a: number, b: number) => a + b,
  subtract: (a: number, b: number) => a - b,
  multiply: (a: number, b: number) => a * b,
  divide: (a: number, b: number) => a / b,
};

Object.assign(window, addAllOfThisToWindow);

declare global {
  type Add = typeof addAllOfThisToWindow;
  interface Window extends Add {}
}

type tests = [
  Expect<Equal<typeof window.add, (a: number, b: number) => number>>,
  Expect<Equal<typeof window.subtract, (a: number, b: number) => number>>,
  Expect<Equal<typeof window.multiply, (a: number, b: number) => number>>,
  Expect<Equal<typeof window.divide, (a: number, b: number) => number>>
];
