# @unction/of

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> A => B => Record<string | number | symbol, C> | Map<D, C> => Record<string | number | symbol, B> | Map<B, A>

Creates a enumerable based on a value and optional key.

``` javascript
of("aaa")("bbb")({}) // {aaa: "bbb"}
of(null)("bbb")([]) // ["bbb"]
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/of.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/of.svg?maxAge=2592000&style=flat-square
