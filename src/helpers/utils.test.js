import { expect } from "@jest/globals";
import { isIdentical, isObject, isEmptyObject, convertToArray } from "./utils";

describe("Utility function tests", () => {
  describe("isObject", () => {
    it("should return true for a valid object that's not null, function or  array", () => {
      const data = {
        name: "Merkel",
      };
      const result = isObject(data);
      expect(result).toBe(true);
    });

    it("should return false for a non-object", () => {
      const data = () => "hello";
      const result = isObject(data);
      expect(result).toBe(false);
    });
  });

  describe("isEmptyObject", () => {
    it("should return true for an empty object", () => {
      const data = {};
      const result = isEmptyObject(data);
      expect(result).toBe(true);
    });

    it("should return false for a non-empty object", () => {
      const data = {
        name: "Merkel",
      };
      const result = isEmptyObject(data);
      expect(result).toBe(false);
    });
  });

  describe("isIdentical", () => {
    it("should return false for array whose values are not all the same", () => {
      const array = [1, 2, 1, 1];
      const result = isIdentical(array);
      expect(result).toBe(false);
    });

    it("should return true for array whose values are  all the same", () => {
      const array = [1, 1, 1, 1];
      const result = isIdentical(array);
      expect(result).toBe(true);
    });
  });

  describe("converToArray", () => {
    it("should throw error when invoked with an empty object", () => {
      expect(() => {
        convertToArray({});
      }).toThrow("You must provide a valid non-empty object");
    });

    it("should throw error when invoked with an array", () => {
      expect(() => {
        convertToArray([1, 2, 3]);
      }).toThrow("You must provide a valid non-empty object");
    });
  });

  it("should return an array when invoked with a valid non-empty object", () => {
    const testObject = {
      name: "Margaret",
      age: 45,
      nationality: "Hungary",
    };
    const result = convertToArray(testObject);
    expect(Array.isArray(result)).toBe(true);
    expect(result).toBeInstanceOf(Array)
  });
});
