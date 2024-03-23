import { Equal, Expect } from "../helpers/type-utils";

//? Infer keyword

// The infer keyword lets you infer the type of a generic type parameter inside a conditional type.

type GetDataValue<T> = T extends { data: infer TData } ? TData : never;

type GetObj<T> = T extends { data: infer TData } ? TData : never;

type tests = [
  Expect<Equal<GetDataValue<{ data: "hello" }>, "hello">>,
  Expect<Equal<GetDataValue<{ data: { name: "hello" } }>, { name: "hello" }>>,
  Expect<
    Equal<
      GetDataValue<{ data: { name: "hello"; age: 20 } }>,
      { name: "hello"; age: 20 }
    >
  >,
  // Expect that if you pass in string, it
  // should return never
  Expect<Equal<GetDataValue<string>, never>>
];
