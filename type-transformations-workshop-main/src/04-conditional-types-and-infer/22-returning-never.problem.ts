import { never } from "zod";
import { Equal, Expect } from "../helpers/type-utils";

//? Never keyword
// This is the never keyword. It's a way to represent the type of something that should never occur

//? Nested conditional type
// Conditional types can be nested in TypeScript!

type YouSayGoodbyeAndISayHello<T> = T extends "hello" | "goodbye"
  ? T extends "hello"
    ? "goodbye"
    : "hello"
  : never;

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"alright pal">, never>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<1>, never>>
];
