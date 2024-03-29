import { F } from "ts-toolbelt";
import { it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * We know that asConst works, but we now also want to be
 * able to narrow the type to only allow an array
 * of fruits.
 */
export const narrowFruits = <TFruits extends { name: string; price: number }[]>(
  t: F.Narrow<TFruits>
) => t;

const fruits = narrowFruits([
  {
    name: "apple",
    price: 1,
  },
  {
    name: "banana",
    price: 2,
  },
  {
    name: "orange",
    price: 3,
  },
]);

type fruitsName = (typeof fruits)[number]["name"];
type fruitsPrice = (typeof fruits)[number]["price"];

type tests = [
  Expect<
    Equal<
      typeof fruits,
      [
        {
          name: "apple";
          price: 1;
        },
        {
          name: "banana";
          price: 2;
        },
        {
          name: "orange";
          price: 3;
        }
      ]
    >
  >
];

it("Should ONLY let you pass an array of fruits", () => {
  const notAllowed = narrowFruits([
    // @ts-expect-error
    "not allowed",
  ]);
});
