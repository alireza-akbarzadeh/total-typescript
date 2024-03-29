import { T } from "ts-toolbelt";
import { Equal, Expect } from "../helpers/type-utils";
import { K } from "vitest/dist/global-60f880c6";

export function makeEventHandlers<T>(obj: {
  [K in keyof T]: (args: K) => void;
}) {
  return obj;
}

const obj = makeEventHandlers({
  click: (name) => {
    console.log(name);

    type test = Expect<Equal<typeof name, "click">>;
  },
  focus: (name) => {
    console.log(name);

    type test = Expect<Equal<typeof name, "focus">>;
  },
});
