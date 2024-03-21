/**
 * It's important to understand the terminology around unions:
 *
 * One of the type declarations below is a union.
 * One of the type declarations below is a discriminated union.
 * One of the type declarations below is an enum.
 *
 * Which is which?
 */

// this one is descriminatedu union
type A =
  | {
      type: "a";
      a: string;
      testa: string;
    }
  | {
      type: "b";
      b: string;
      testb: string;
    }
  | {
      type: "c";
      c: string;
      testc: string;
    };

const result = (result: A) => {
  if (result.type === "a") result.a;
  if (result.type === "b") result.testb;
  if (result.type === "c") result.testc;
};

//  this one is union
type B = "a" | "b" | "c";

// this one is enum
enum C {
  A = "a",
  B = "b",
  C = "c",
}

export {};
