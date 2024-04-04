import { Equal, Expect } from "../helpers/type-utils";

export const createSet = <TSet>(initailValue?: TSet) => {
  return new Set<TSet>();
};

const stringSet = createSet("2312312");
const numberSet = createSet(2131232);
const unknownSet = createSet();
stringSet.forEach;
type tests = [
  Expect<Equal<typeof stringSet, Set<string>>>,
  Expect<Equal<typeof numberSet, Set<number>>>,
  Expect<Equal<typeof unknownSet, Set<unknown>>>
];
