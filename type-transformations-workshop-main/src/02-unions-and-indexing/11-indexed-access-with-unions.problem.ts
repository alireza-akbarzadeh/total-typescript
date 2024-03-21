import { Equal, Expect } from "../helpers/type-utils";

export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

//? Exclude utility type
// The Exclude utility type lets you exclude some members of a union type

export type IndividualProgram = (typeof programModeEnumMap)[
  | "ONE_ON_ONE"
  | "PLANNED_ONE_ON_ONE"
  | "PLANNED_SELF_DIRECTED"
  | "SELF_DIRECTED"];

type tests = [
  Expect<
    Equal<
      IndividualProgram,
      "1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"
    >
  >
];
