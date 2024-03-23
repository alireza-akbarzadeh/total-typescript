import { Equal, Expect } from "../helpers/type-utils";

//? Mapped types
// You can use a mapped type to create objects by iterating over keys.

type Route = "/" | "/about" | "/admin" | "/admin/users";

type RoutesObject = {
  [key in Route]: key;
};

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        "/": "/";
        "/about": "/about";
        "/admin": "/admin";
        "/admin/users": "/admin/users";
      }
    >
  >
];

type Features = {
  darkMode: () => void;
  newUserProfile: () => void;
  value: string;
  label: string;
  id: number;
  email: string;
};

// whe can change all value of  a type

type OptionsFlags<Type> = {
  [Property in keyof Type]: Type[Property];
};

type FeatureOptions = OptionsFlags<Features>;

// Removes 'optional' attributes from a type's properties
// if you don't add - the default one will be + sign and all key become  optional

type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User = Concrete<MaybeUser>;

// type User = {
//     id: string;
//     name: string;
//     age: number;
// }

//? Key remapping via 'as'
// You can remap keys in mapped types using the "as" keyword.

type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<
    string & Property
  >}`]: () => Type[Property];
};
interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;

// will be
// type LazyPerson = {
//     getName: () => string;
//     getAge: () => number;
//     getLocation: () => string;
// }

// Remove the 'kind' property
type RemoveKindField<Type> = {
  [Property in keyof Type as Exclude<Property, "kind">]: Type[Property];
};
interface Circle {
  kind: "circle";
  radius: number;
}

type KindlessCircle = RemoveKindField<Circle>;

type EventConfig<Events extends { kind: string; label: string }> = {
  [E in Events as E["kind"]]: (event: E) => void;
};

type SquareEvent = { kind: "square"; x: number; y: number };
type CircleEvent = { kind: "circle"; radius: number };

type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};

type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};
type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;
