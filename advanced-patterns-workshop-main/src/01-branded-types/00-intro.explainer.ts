// Matt explains the course

import { T } from "ts-toolbelt";
import { Brand } from "../helpers/Brand";

export {};

// type EmailAddress = string & { __brand: "EmailAddress" };
type EmailAddress = Brand<string, "EmailAddress">;

function isEmailAddress(email: string): email is EmailAddress {
  return email.includes("@gmail.com");
}
function assertEmailAddress(email: string): asserts email is EmailAddress {
  if (!email.includes("@gmail.com")) {
    throw new Error("Invalid email address");
  }
}
function sendEmailAddress(e: EmailAddress) {
  //
}
function signUp(email: string) {
  //   if (isEmailAddress(email)) {
  //     sendEmailAddress(email);
  //   }
  assertEmailAddress(email);
  sendEmailAddress(email);
}
