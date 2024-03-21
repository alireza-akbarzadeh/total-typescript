import { Equal, Expect } from "../helpers/type-utils";

//? Generics in types
// You can use generics in types to make them more flexible. It turns them into a kind of function, which can return different types depending on what you pass in.

//? null keyword
// This is the null keyword. It's a way to represent the type of null.

type ReturnWhatIPassIn<T> = T;

type tests = [
  Expect<Equal<ReturnWhatIPassIn<1>, 1>>,
  Expect<Equal<ReturnWhatIPassIn<"1">, "1">>,
  Expect<Equal<ReturnWhatIPassIn<true>, true>>,
  Expect<Equal<ReturnWhatIPassIn<false>, false>>,
  Expect<Equal<ReturnWhatIPassIn<null>, null>>
];
