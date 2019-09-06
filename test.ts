
import {empty} from "most";
import streamSatisfies from "@unction/streamsatisfies";

import of from "./index.ts";

test("Object", () => {
  expect(of("aaa")("bbb")({})).toEqual({aaa: "bbb"});
});

test("Array", () => {
  expect(of(null)("bbb")([
  ])).toEqual([
    "bbb",
  ]);
});

test("Map", () => {
  expect(of("aaa")("bbb")(new Map())).toEqual(new Map([
    [
      "aaa",
      "bbb",
    ],
  ]));
});

test("Set", () => {
  expect(of(null)("bbb")(new Set())).toEqual(new Set([
    "bbb",
  ]));
});

test("String", () => {
  expect(of(null)("a")("")).toEqual("a");
});

test("Stream", done => {
  streamSatisfies(
    "'a'---|"
  )(
    (given) => (expected) => expect(given).toBe(expected)
  )(
    doesNotThrow
  )(
    ({length}) =>
      (position) => {
        expect(length).toBe(position);
        done();
      }
  )(
    of(
      null
    )(
      "a"
    )(
      empty()
    )
  );
});

test(() => {
  expect(() => of("a")("b")(false)).toThrow();
});
