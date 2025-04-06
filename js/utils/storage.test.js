import { it, describe, expect, beforeEach } from "vitest";
import { saveUser, getUsername } from "./storage";

describe("getUsername", () => {
  beforeEach(() => {
    const storage = {};

    this.localStorage = {
      setItem: (key, value) => (storage[key] = value),
      getItem: (key) => storage[key] || null,
    };
  });

  it("returns the name from the user object in storage", () => {
    const user = { name: "John Doe" };
    saveUser(user);

    const username = getUsername();
    expect(username).toBe("John Doe");
  });

  it("returns null when no user exists in storage", () => {
    const username = getUsername();
    expect(username).toBe(null);
  });
});
