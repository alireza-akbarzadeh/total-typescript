import { Equal, Expect } from "../helpers/type-utils";

type Event = `log_in` | "log_out" | "sign_up";

// Lowercase utility type

// The Lowercase utility type lets you convert a string literal type to a string literal type with all characters lowercase.

type ObjectOfKeys = Record<Uppercase<Event>, string>;
type ObjectOfKeys1 = Record<Capitalize<Event>, string>;
type ObjectOfKey2 = Record<Lowercase<Event>, string>;

type tests = [
  Expect<
    Equal<
      ObjectOfKeys,
      {
        LOG_IN: string;
        LOG_OUT: string;
        SIGN_UP: string;
      }
    >
  >
];
