import {of as streamOf} from "most";
import type from "@unction/type";

export default function of<A, B, C, D> (key: A) {
  return function ofKey (value: B) {
    return function ofKeyValue (enumerable: Record<string | number | symbol, C> | Map<D, C>): Record<string | number | symbol, B> | Map<B, A> {
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
