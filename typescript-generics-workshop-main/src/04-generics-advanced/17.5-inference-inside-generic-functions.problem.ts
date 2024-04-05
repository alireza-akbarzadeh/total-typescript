type Person = {
  name: string;
  age: number;
  birthdate: Date;
};

export function remapPerson<Key extends keyof Person>(
  key: Key,
  value: Person[Key]
) {
  if (key === "name") {
    return new Date() as Person[Key];
  }

  return value;
}
