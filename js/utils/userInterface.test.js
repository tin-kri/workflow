import { it, describe, expect } from "vitest";
import { isActivePath } from "./userInterface";

describe("isActivePath", () => {
  // Test case 1: Path starts with href
  it("returns true when current path matches href exactly", () => {
    expect(isActivePath("/login", "/login")).toBe(true);
  });

  // Test case 2: Root path handling
  it('returns true for root path ("/") when path is "/" or "/index.html"', () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  // Test case 3: Path includes href
  it("returns true when current path includes the href", () => {
    expect(isActivePath("/venue", "/venue/index.html?id=435")).toBe(true);
  });

  // Test case 4: Path does not include href
  it("returns false when paths does not match", () => {
    expect(isActivePath("/register", "/")).toBe(false);
    expect(isActivePath("/login", "/venue")).toBe(false);
  });
});
