//? Never keyword
// This is the never keyword. It's a way to represent the type of something that should never occur.

export type Maybe<T extends {}> = T | null | undefined;

const whatever: {} = 0;

type tests = [
  // @ts-expect-error
  Maybe<null>,
  // @ts-expect-error
  Maybe<undefined>,

  Maybe<string>,
  Maybe<false>,
  Maybe<0>,
  Maybe<"">
];
