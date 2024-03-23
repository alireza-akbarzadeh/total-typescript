import { Equal, Expect } from "../helpers/type-utils";

//? Interface declaration
// This is an interface declaration. It's like a type alias, but it can be extended.

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

/**
 * Generates a type `AttributeGetters` that maps over the keys of
 * the `Attributes` interface to create getter functions for each attribute.
 *
 * For each key `K` in `keyof Attributes`, it creates a getter function named
 * `get${Capitalize<K>}()` that returns the value of that key from `Attributes`.
 */
type AttributeGetters = {
  [K in keyof Attributes as `get${Capitalize<K>}`]: () => Attributes[K];
};

/**
 * Tests to check that AttributeGetters maps each key K in Attributes
 * to a getter function named get${Capitalize<K>} that returns the value
 * of that key.
 */
type tests = [
  Expect<
    Equal<
      AttributeGetters,
      {
        getFirstName: () => string;
        getLastName: () => string;
        getAge: () => number;
      }
    >
  >
];
