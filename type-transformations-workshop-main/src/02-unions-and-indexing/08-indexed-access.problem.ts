import { Equal, Expect } from "../helpers/type-utils";

export const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};

type FakeDataIndexAccess = typeof fakeDataDefaults;

export type StringType = FakeDataIndexAccess["String"];
export type IntType = FakeDataIndexAccess["Int"];
export type FloatType = FakeDataIndexAccess["Float"];
export type BooleanType = FakeDataIndexAccess["Boolean"];
export type IDType = FakeDataIndexAccess["ID"];

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>
];
