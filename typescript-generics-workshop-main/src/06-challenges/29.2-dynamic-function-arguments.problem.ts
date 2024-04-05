import { it } from "vitest";

type ClickPayload = {
  x: number;
  y: number;
  c: number;
};

type Events =
  | {
      type: "click";
      click: ClickPayload;
    }
  | { type: "focus"; focus: undefined };

export const sendEvent = <T extends Events["type"]>(
  event: T,
  ...args: T extends "click" ? [ClickPayload] : []
) => {
  // Send the event somewhere!
};

it("Should force you to pass a second argument when you choose an event with a payload", () => {
  // @ts-expect-error
  sendEvent("click");

  sendEvent("click", {
    // @ts-expect-error
    x: "oh dear",
  });

  sendEvent(
    "click",
    // @ts-expect-error
    {
      y: 1,
    }
  );

  sendEvent("click", {
    x: 1,
    y: 2,
    c: 4,
  });
});

it("Should prevent you from passing a second argument when you choose an event without a payload", () => {
  sendEvent("focus");

  sendEvent(
    "focus",
    // @ts-expect-error
    {}
  );
});
