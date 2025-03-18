import { TinyColor } from '@ctrl/tinycolor'
import { describe, expect, it } from 'vitest'

describe('tinycolor', () => {
  it('should color works', () => {
    expect(new TinyColor('')).toMatchInlineSnapshot(`
      TinyColor {
        "a": 1,
        "b": 0,
        "format": false,
        "g": 0,
        "gradientType": undefined,
        "isValid": false,
        "originalInput": "",
        "r": 0,
        "roundA": 1,
      }
    `)
  })
})
