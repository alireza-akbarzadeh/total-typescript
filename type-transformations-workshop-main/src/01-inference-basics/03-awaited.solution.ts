import { Equal, Expect } from "../helpers/type-utils";

const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "john@example.com",
  });
};
//? ReturnType utility type
// The ReturnType utility type lets you get the return type of a function type.

//? Awaited utility type

// The Awaited utility type lets you get the type of a Promise's resolved value.

type ReturnValue = Awaited<ReturnType<typeof getUser>>;

type tests = [
  Expect<Equal<ReturnValue, { id: string; name: string; email: string }>>
];
