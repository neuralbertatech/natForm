import _ms from 'ms'

export function hs(arg: string): number | undefined {
  const value = ms(arg)

  if (value) {
    return Math.round(value / 1_000)
  }
}

export function ms(arg: string): number | undefined {
  return _ms(arg)
}

export const toSecond = hs
export const toMillisecond = ms
