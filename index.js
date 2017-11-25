import xstream from "xstream"
import type from "@unction/type"

export default function of (key: KeyType | void): UnaryFunctionType {
  return function ofKey (value: ValueType): UnaryFunctionType {
    return function ofKeyValue (functor: FunctorType): UnaryFunctionType {
      switch (type(functor)) {
        case "Object": {
          return {[key]: value}
        }
        case "Map": {
          return new Map([
            [
              key,
              value,
            ],
          ])
        }
        case "Set": {
          return new Set([
            value,
          ])
        }
        case "Array": {
          return [
            value,
          ]
        }
        case "String": {
          return `${value}`
        }
        case "Stream": {
          return xstream.of(value)
        }
        case "MemoryStream": {
          return xstream.of(value).remember()
        }
        default: {
          throw new Error(`of doesn't know how to type ${type(functor)}`)
        }
      }
    }
  }
}
