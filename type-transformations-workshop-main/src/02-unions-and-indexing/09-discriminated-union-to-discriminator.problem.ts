import { Equal, Expect } from "../helpers/type-utils";

//? Union type
// A union type is a type formed from two or more other types, representing values that may be any one of those types.

export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

type EventType = Event["type"];

type tests = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];
