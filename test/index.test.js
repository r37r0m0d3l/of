const { Of, of, ofAny, ofAnyCase, ofCase, ofError, ofIt, ofResult, ofSync } = require("../dist/of.cjs");

describe("calling and printing", () => {
  it("should not crash on call", () => {
    expect(Of).toBeDefined();
    expect(of).toBeDefined();
    expect(ofAny).toBeDefined();
    expect(ofAnyCase).toBeDefined();
    expect(ofCase).toBeDefined();
    expect(ofError).toBeDefined();
    expect(ofIt).toBeDefined();
    expect(ofResult).toBeDefined();
  });
  it("of", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      resolve(value);
    });
    return of(promise).then((result) => {
      expect(result[0]).toEqual(value);
      expect(result[1]).toBeUndefined();
    });
  });
  it("ofAny", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      resolve(value);
    });
    return ofAny(promise).then((result) => {
      expect(result[0]).toEqual(value);
      expect(result[1]).toBeUndefined();
    });
  });
  it("ofAnyCase", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      resolve(value);
    });
    return ofAnyCase(promise).then((result) => {
      expect(result[0]).toEqual(value);
      expect(result[1]).toBeUndefined();
    });
  });
  it("ofCase", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      resolve(value);
    });
    return ofCase(promise).then((result) => {
      expect(result[0]).toEqual(value);
      expect(result[1]).toBeUndefined();
    });
  });
  it("ofError", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      resolve(value);
    });
    return ofError(promise).then((result) => {
      expect(result).toBeUndefined();
    });
  });
  it("ofIt", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      resolve(value);
    });
    return ofIt(promise).then((result) => {
      expect(result[0]).toEqual(value);
      expect(result[1]).toBeUndefined();
    });
  });
  it("ofResult", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      resolve(value);
    });
    return ofResult(promise).then((result) => {
      expect(result).toEqual(value);
    });
  });
  it("ofSync", () => {
    const value = "Oh, Hi Mark!";
    const callable = (arg) => {
      return arg;
    };
    expect(ofSync(callable, [value])).toEqual([value, undefined]);
  });
  it("Of", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      resolve(value);
    });
    return Of.async(promise).then((result) => {
      expect(result[0]).toEqual(value);
      expect(result[1]).toBeUndefined();
    });
  });
});
