import { Equal, Expect } from "../helpers/type-utils";

//? Function parameter type annotation
// This annotation tells the function what type the parameter should be.

//? Optional Object Property

// The question mark next to this object property means that it's optional - it doesn't need to be specified on this object.

const makeQuery = (
  url: string,
  opts?: {
    method?: string;
    headers?: {
      [key: string]: string;
    };
    body?: string;
  }
) => {};

//? Parameters utility type
// The Parameters utility type lets you get the parameters of a function type.

type MakeQueryParameters = Parameters<typeof makeQuery>;

type tests = [
  Expect<
    Equal<
      MakeQueryParameters,
      [
        url: string,
        opts?: {
          method?: string;
          headers?: {
            [key: string]: string;
          };
          body?: string;
        }
      ]
    >
  >
];
