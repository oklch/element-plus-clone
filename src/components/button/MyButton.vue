<script setup lang="ts">
import type { ButtonProps } from './button'
import { Loading } from '@element-plus/icons-vue'
import { useNamespace } from '~/utils/useNamespace'
import { useButtonCustomColor } from './useButtonCustomColor'

const props = withDefaults(defineProps<ButtonProps>(), {
  size: 'default',
  type: 'default',
  plain: false,
  text: false,
  bg: false,
  link: false,
  round: false,
  circle: false,
  loading: false,
  loadingIcon: Loading,
  disabled: false,
  autofocus: false,
  nativeType: 'button',
  autoInsertSpace: false,
  dark: false,
  tag: 'button',
})
const emit = defineEmits<{
  (e: 'click', evt: MouseEvent): void
}>()

const _props = computed(() => {
  if (props.tag === 'button') {
    return {
      ariaDisabled: props.disabled || props.loading,
      disabled: props.disabled || props.loading,
      autofocus: props.autofocus,
      type: props.nativeType,
    }
  }
  return {}
})

function handleClick(evt: MouseEvent) {
  if (props.disabled || props.loading) {
    evt.stopPropagation()
    return
  }
  emit('click', evt)
}

const ns = useNamespace('button')
const customColor = useButtonCustomColor(props)
const buttonKls = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.m(props.size),
  ns.is('disabled', props.disabled || props.loading),
  ns.is('loading', props.loading),
  ns.is('plain', props.plain),
  ns.is('round', props.round),
  ns.is('circle', props.circle),
  ns.is('text', props.text),
  ns.is('link', props.link),
  ns.is('has-bg', props.bg),
])
</script>

<template>
  <button :class="buttonKls" v-bind="_props" :style="customColor" @click="handleClick">
    <template v-if="loading">
      <slots v-if="$slots.loading" name="loading" />
      <el-icon v-else :class="ns.is('loading')">
        <component :is="loadingIcon" />
      </el-icon>
    </template>
    <el-icon v-else-if="icon || $slots.icon">
      <component :is="icon" v-if="icon" />
      <slot v-else name="icon" />
    </el-icon>
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>
