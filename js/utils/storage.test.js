// import { it, describe, expect, beforeEach } from "vitest";
// import { saveUser, getUsername } from "./storage";

// describe("getUsername", () => {
//   beforeEach(() => {
//     const storage = {};

//     this.localStorage = {
//       setItem: (key, value) => (storage[key] = value),
//       getItem: (key) => storage[key] || null,
//     };
//   });

//   it("returns the name from the user object in storage", () => {
//     const user = { name: "John Doe" };
//     saveUser(user);

//     const username = getUsername();
//     expect(username).toBe("John Doe");
//   });

//   it("returns null when no user exists in storage", () => {
//     const username = getUsername();
//     expect(username).toBe();
//   });
// });

import { expect, describe, it, beforeEach } from "vitest";
import { getUsername, saveUser } from "./storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("Returns the name from the user object in local storage", () => {
    saveUser({ name: "test-user" });
    expect(getUsername()).toBe("test-user");
  });

  it("Returns null when no user exists in local storage", () => {
    expect(getUsername()).toBe(null);
  });
});
