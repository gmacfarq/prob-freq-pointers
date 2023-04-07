"use strict";

describe("canConstructWord", function () {
  it("should return false for empty letters string", function () {
    expect(canConstructWord("abcd", "")).toBe(false);
  });

  it("should return true for empty message", function () {
    expect(canConstructWord("", "abc")).toBe(true);
  });

  it("should account for duplicates", function () {
    expect(canConstructWord("aa", "abcd")).toBe(false);
  });

  it("should handle large cases", function () {
    expect(canConstructWord(
        "skbjjjvnnd",
        "fdjlkjfeburevjvnfnsjckjncjdnchbechbadhsd")).toBe(true);
  });

  it("should return true if all letters contained", function () {
    expect(canConstructWord("abc", "abcd")).toBe(true);
  });

  it("should return false if word contains a letter not in letters", function () {
    expect(canConstructWord("abcd", "abc")).toBe(false);
  });
});
