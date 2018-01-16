# @unction/of

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> (KeyType | void) => ValueType => FunctorType

Creates a functor based on a value and optional key.

``` javascript
of("aaa")("bbb")({}) // {aaa: "bbb"}
of(null)("bbb")([]) // ["bbb"]
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/of.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/of.svg?maxAge=2592000&style=flat-square
