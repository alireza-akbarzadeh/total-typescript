import { Equal, Expect } from "../helpers/type-utils";

//? Conditional type
// This is a conditional type. It's a kind of if-else logic in TypeScript, but at the type level.

type YouSayGoodbyeAndISayHello<T> = T extends "hello" ? "goodbye" : "hello";

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>
];
