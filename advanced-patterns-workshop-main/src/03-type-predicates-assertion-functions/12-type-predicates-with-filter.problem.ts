import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

export const values = ["a", "b", undefined, "c", undefined];

const filteredValues = values.filter((value): value is string =>
  Boolean(value)
);

it("Should filter out the undefined values", () => {
  expect(filteredValues).toEqual(["a", "b", "c"]);
});

it('Should be of type "string[]"', () => {
  type test1 = Expect<Equal<typeof filteredValues, string[]>>;
});

interface Person {
  name: string;
  age: number;
  number: number;
  address: {
    street: string;
    city: string;
    zip: number;
  };
}
function isPerson(variable: any): variable is Person {
  return (
    typeof variable === "object" &&
    variable !== null &&
    "name" in variable &&
    "age" in variable &&
    "address" in variable
  );
}
let variable: any = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    zip: 10001,
  },
};

if (isPerson(variable)) {
  console.log(variable.address.city);
}
