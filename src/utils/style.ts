export const isNumber = (val: any): val is number => typeof val === 'number'

export function isStringNumber(val: string): boolean {
  return !Number.isNaN(Number(val))
}

export function addUnit(value?: string | number, defaultUnit = 'px') {
  if (!value)
    return ''
  if (isNumber(value) || isStringNumber(value)) {
    return `${value}${defaultUnit}`
  }
  return value
}
