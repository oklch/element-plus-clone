import type { Component } from 'vue'

export const buttonSizes = ['large', 'default', 'small'] as const
export const buttonTypes = ['default', 'primary', 'success', 'warning', 'info', 'danger'] as const
export const buttonNativeTypes = ['button', 'submit', 'reset'] as const

export interface ButtonProps {
  size?: typeof buttonSizes[number]
  type?: typeof buttonTypes[number]
  plain?: boolean
  text?: boolean
  bg?: boolean
  link?: boolean
  round?: boolean
  circle?: boolean
  loading?: boolean
  loadingIcon?: string | Component
  disabled?: boolean
  icon?: string | Component
  autofocus?: boolean
  nativeType?: typeof buttonNativeTypes[number]
  autoInsertSpace?: boolean
  color?: string
  dark?: boolean
  tag?: string | Component
}
