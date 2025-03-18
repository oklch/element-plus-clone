<script setup lang="ts">
</script>

<template>
  <button @click="toggleDark()">
    <Transition mode="out-in">
      <div v-if="isDark" i-carbon-sun />
      <div v-else i-carbon-moon />
    </Transition>
  </button>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
