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
