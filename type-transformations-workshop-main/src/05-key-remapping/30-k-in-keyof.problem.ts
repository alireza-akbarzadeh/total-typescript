import { Equal, Expect } from "../helpers/type-utils";

//? Interface declaration
// This is an interface declaration. It's like a type alias, but it can be extended.

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

type AttributeGetters = {
  [Key in keyof Attributes]: () => Attributes[Key];
};

type tests = [
  Expect<
    Equal<
      AttributeGetters,
      {
        firstName: () => string;
        lastName: () => string;
        age: () => number;
      }
    >
  >
];
