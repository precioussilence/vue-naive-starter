<script setup lang="ts">
import type { Breadcrumb } from '@/types/common'

const breadcrumbs = ref<Breadcrumb[]>([])
const route = useRoute()
const router = useRouter()

function generateBreadcrumbs() {
  breadcrumbs.value = route.matched
    .filter(record => record.meta && record.meta.title)
    .map(record => ({
      path: record.path,
      title: record.meta.title as string,
      name: record.name as string,
      icon: record.meta.icon as string,
      fullPath: router.resolve(record.path).href,
    }))
}

watch(
  () => route.fullPath,
  () => {
    generateBreadcrumbs()
  },
  { immediate: true },
)

function handleBreadcrumbClick(fullPath: string) {
  router.push(fullPath)
}
</script>

<template>
  <section class="h-full flex">
    <div class="flex items-center gap-4 p-4">
      <n-button type="default" :bordered="false">
        <i class="i-mdi-menu-open text-2xl" />
      </n-button>
    </div>
    <div class="flex flex-1 items-center justify-start py-4">
      <n-breadcrumb class="align-middle">
        <n-breadcrumb-item
          v-for="(crumb, index) in breadcrumbs"
          :key="crumb.fullPath"
          :class="{ 'cursor-pointer': index !== breadcrumbs.length - 1 } "
          @click="handleBreadcrumbClick(crumb.fullPath)"
        >
          <i class="mx-1 align-middle text-lg" :class="crumb.icon" />
          <n-text type="default" class="text-md font-medium">
            {{ crumb.title }}
          </n-text>
        </n-breadcrumb-item>
      </n-breadcrumb>
    </div>
    <div class="flex items-center justify-end gap-4 p-4">
      <n-button type="primary" :bordered="false">
        <i class="i-mdi-account" />
      </n-button>
      <n-button type="primary" :bordered="false">
        <i class="i-mdi-cog" />
      </n-button>
    </div>
  </section>
</template>
