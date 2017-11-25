/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"
import xstream from "xstream"
import streamSatisfies from "@unction/streamsatisfies"

import of from "./index"

test("Object", ({same, end}) => {
  same(
    of("aaa")("bbb")({}),
    {aaa: "bbb"}
  )

  end()
})

test("Array", ({same, end}) => {
  same(
    of(null)("bbb")([
    ]),
    [
      "bbb",
    ]
  )

  end()
})

test("Map", ({same, end}) => {
  same(
    of("aaa")("bbb")(new Map()),
    new Map([
      [
        "aaa",
        "bbb",
      ],
    ])
  )

  end()
})

test("Set", ({same, end}) => {
  same(
    of(null)("bbb")(new Set()),
    new Set([
      "bbb",
    ])
  )

  end()
})

test("String", ({same, end}) => {
  same(
    of(null)("a")(""),
    "a"
  )

  end()
})

test("Stream", ({equal, end}) => {
  streamSatisfies(
    "'a'---|"
  )(
    (given) => (expected) => equal(given, expected)
  )(
    () => () => end()
  )(
    of(
      null
    )(
      "a"
    )(
      xstream.empty()
    )
  )
})

test("MemoryStream", ({equal, end}) => {
  streamSatisfies(
    "'a'---|"
  )(
    (given) => (expected) => equal(given, expected)
  )(
    () => () => end()
  )(
    of(
      null
    )(
      "a"
    )(
      xstream.empty().remember()
    )
  )
})

test(({throws, end}) => {
  throws(() => of("a")("b")(false))

  end()
})
