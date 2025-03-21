import type { CSSProperties } from 'vue'

export interface SpaceProps {
  alignment?: CSSProperties['align-items']
  direction?: 'vertical' | 'horizontal'
  prefixCls?: string
  style?: string | string[] | CSSProperties | CSSProperties[]
  spacer?: string | number | VNode
  size?: 'default' | 'small' | 'large' | number
  wrap?: boolean
  fill?: boolean
  fillRatio?: number
}

export const SIZE_MAP = {
  default: 12,
  small: 8,
  large: 16,
} as const
