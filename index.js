import {of as streamOf} from "most";
import type from "@unction/type";
export default function of (key) {
  return function ofKey (value) {
    return function ofKeyValue (functor) {
      switch (type(functor)) {
        case "Array":
        {
          return [value];
        }

        case "Object":
        {
          return {
            [key]: value,
          };
        }

        case "Set":
        {
          return new Set([value]);
        }

        case "Map":
        {
          return new Map([[key, value]]);
        }

        case "String":
        {
          return `${value}`;
        }

        case "Stream":
        {
          return streamOf(value);
        }

        default:
        {
          throw new Error(`of doesn't know how to type ${type(functor)}`);
        }
      }
    };
  };
}
