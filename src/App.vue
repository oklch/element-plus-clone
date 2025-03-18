<template>
  <el-config-provider namespace="ep">
    <main font-sans text="gray-700 dark:gray-200">
      <RouterView />
      <div text="center 2xl" space-x-2xl>
        <RouterLink btn to="/">
          el
        </RouterLink>
        <RouterLink btn to="/my">
          my
        </RouterLink>
      </div>
    </main>
  </el-config-provider>
</template>
