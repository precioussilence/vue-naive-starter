<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'

const route = useRoute()
const layout = computed(() => {
  return route.meta.layout === 'auth' ? AuthLayout : MainLayout
})
</script>

<template>
  <n-config-provider>
    <n-message-provider>
      <component :is="layout">
        <router-view />
      </component>
    </n-message-provider>
  </n-config-provider>
</template>
