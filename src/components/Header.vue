<script setup lang="ts">
import type { Breadcrumb } from '@/types/common'
import { useFullscreen } from '@vueuse/core'
import { icons } from '@/utils/icon'

const breadcrumbs = ref<Breadcrumb[]>([])
const route = useRoute()
const router = useRouter()
const { isFullscreen, toggle } = useFullscreen()
const options = [
  {
    label: '个人中心',
    key: 'profile',
    icon: icons.userManagement,
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: icons.logout,
  },
]

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
    <div class="flex flex-1 items-center justify-start p-3">
      <n-breadcrumb>
        <n-breadcrumb-item
          v-for="(crumb, index) in breadcrumbs"
          :key="crumb.fullPath"
          :class="{ 'cursor-pointer': index !== breadcrumbs.length - 1 } "
          @click="handleBreadcrumbClick(crumb.fullPath)"
        >
          <n-button>
            <i :class="crumb.icon" /><span class="ml-2">{{ crumb.title }}</span>
          </n-button>
        </n-breadcrumb-item>
      </n-breadcrumb>
    </div>
    <div class="flex items-center justify-end gap-4 p-3">
      <n-button @click="toggle">
        <i :class="isFullscreen ? 'i-mdi:fullscreen-exit' : 'i-mdi:fullscreen'" class="text-7" />
      </n-button>
      <n-dropdown :options="options" placement="bottom-end">
        <n-button>
          <n-avatar
            size="small"
            src="https://www.naiveui.com/assets/naivelogo-BdDVTUmz.svg"
            class="rounded-full"
          />
        </n-button>
      </n-dropdown>
    </div>
  </section>
</template>
