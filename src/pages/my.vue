<script lang="ts" setup>
import { ElDivider } from 'element-plus'
import { h, ref } from 'vue'

const size = ref(10)
const spacer = h(ElDivider, { direction: 'vertical' })
</script>

<template>
  <MySpace :size="size" :spacer="spacer">
    1
    <div v-for="i in 2" :key="i">
      <el-button> button {{ i }} </el-button>
    </div>
  </MySpace>
</template>
