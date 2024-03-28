import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

interface User {
  id: string;
  name: string;
}

interface AdminUser extends User {
  role: "admin";
  organisations: string[];
}

interface NormalUser extends User {
  role: "normal";
}

function assertUserIsAdmin(
  user: NormalUser | AdminUser
): asserts user is AdminUser {
  if (user.role !== "admin") {
    throw new Error("Not an admin user");
  }
}

it("Should throw an error when it encounters a normal user", () => {
  const user: NormalUser = {
    id: "user_1",
    name: "Miles",
    role: "normal",
  };

  expect(() => assertUserIsAdmin(user)).toThrow();
});

it("Should assert that the type is an admin user after it has been validated", () => {
  const example = (user: NormalUser | AdminUser) => {
    assertUserIsAdmin(user);

    type tests = [Expect<Equal<typeof user, AdminUser>>];
  };
});

type Member = { id: number };

declare function greetMember(member: Member): member is Member;

declare const members: Array<Member>;

function assertMember(args: unknown): asserts args is Member {
  if (
    !!args &&
    typeof args === "object" &&
    "id" in args &&
    typeof args.id === "number"
  ) {
    // is a member, do somthing
  } else {
    throw new Error("Not a member");
  }
}

const member = members.find((m) => m.id === 1);
assertMember(member);
greetMember(member);
