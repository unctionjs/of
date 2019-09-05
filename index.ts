import {of as streamOf} from "most";
import type from "@unction/type";

import {EnumerableType} from "./types";

export default function of<A, B, C, D> (key: A) {
  return function ofKey (value: B) {
    return function ofKeyValue (enumerable: EnumerableType<C, D>): EnumerableType<A, B> {
      switch (type(enumerable)) {
        case "Array": {
          return [value];
        }

        case "Object": {
          return {
            [key]: value,
          };
        }

        case "Set": {
          return new Set([value]);
        }

        case "Map": {
          return new Map([[key, value]]);
        }

        case "String": {
          return `${value}`;
        }

        case "Stream": {
          return streamOf(value);
        }

        default: {
          throw new Error(`of doesn't know how to type ${type(enumerable)}`);
        }
      }
    };
  };
}
