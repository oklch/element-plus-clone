<script setup lang="ts">
import type { VNode } from 'vue'
import type { SpaceProps } from './space'
import { Fragment } from 'vue'
import { addUnit } from '~/utils/style'
import { SIZE_MAP } from './space'

const props = withDefaults(defineProps<SpaceProps>(), {
  alignment: 'center',
  direction: 'horizontal',
  size: 'small',
  wrap: false,
  fill: false,
  fillRatio: 100,
})

const flexDirection = computed(() => props.direction === 'horizontal' ? 'row' : 'column')
const flexWrap = computed(() => props.wrap ? 'wrap' : 'nowrap')
const minWidth = computed(() => props.fill ? `${props.fillRatio}%` : 'auto')
const gap = computed(() => {
  if (typeof props.size === 'string') {
    return addUnit(SIZE_MAP[props.size])
  }
  return addUnit(props.size)
})

const slots = useSlots()
function processedNodes(): VNode[] {
  if (!slots || !slots.default)
    return []
  let vNodes: VNode[] = slots.default()
  vNodes = vNodes.flatMap((n) => {
    if (n.type === Fragment)
      return n.children as VNode[]
    return n
  })
  const result: VNode[] = []
  for (const n of vNodes) {
    result.push(n)
    result.push(h('span', props.spacer))
  }
  result.pop()
  return result
}
</script>

<template>
  <div class="space" :class="{ fill }" :style="style">
    <template v-if="spacer">
      <template v-for="(node, index) in processedNodes()" :key="index">
        <component :is="node" />
      </template>
    </template>
    <slot v-else />
  </div>
</template>

<style scoped>
.space {
  display: inline-flex;
  align-items: v-bind('$props.alignment');
  flex-direction: v-bind(flexDirection);
  flex-wrap: v-bind(flexWrap);
  gap: v-bind(gap);
}

.fill > * {
  flex-grow: 1;
  min-width: v-bind(minWidth);
}
</style>
