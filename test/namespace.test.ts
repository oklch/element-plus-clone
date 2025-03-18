import { describe, expect, it } from 'vitest'
import { useNamespace } from '~/utils/useNamespace'

describe('namespace', () => {
  it('should log', () => {
    expect((() => {
      const test = useNamespace('button') as Record<string, any>
      const res: Record<string, string> = {}
      for (const k in test) {
        res[k] = test[k].toString()
      }
      return res
    })()).toMatchInlineSnapshot(`
      {
        "b": "(blockSuffix = "") => _bem(namespace, block, blockSuffix, "", "")",
        "be": "(blockSuffix, element) => blockSuffix && element ? _bem(namespace, block, blockSuffix, element, "") : """,
        "bem": "(blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace, block, blockSuffix, element, modifier) : """,
        "bm": "(blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace, block, blockSuffix, "", modifier) : """,
        "cssVar": "(object) => {
          const styles = {};
          for (const key in object) {
            if (object[key]) {
              styles[\`--\${namespace}-\${key}\`] = object[key];
            }
          };
          return styles;
        }",
        "cssVarBlock": "(object) => {
          const styles = {};
          for (const key in object) {
            if (object[key]) {
              styles[\`--\${namespace}-\${block}-\${key}\`] = object[key];
            }
          };
          return styles;
        }",
        "cssVarBlockName": "(name) => \`--\${namespace}-\${block}-\${name}\`",
        "cssVarName": "(name) => \`--\${namespace}-\${name}\`",
        "e": "(element) => element ? _bem(namespace, block, "", element, "") : """,
        "em": "(element, modifier) => element && modifier ? _bem(namespace, block, "", element, modifier) : """,
        "is": "(name, state = true) => {
          return name && state ? \`\${statePrefix}\${name}\` : "";
        }",
        "m": "(modifier) => modifier ? _bem(namespace, block, "", "", modifier) : """,
        "namespace": "my",
      }
    `)
  })
})
