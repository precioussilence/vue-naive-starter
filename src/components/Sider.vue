<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { icons } from '@/utils/icon'

const activeKey = ref<string>('')
const collapsed = ref(false)
const menuOptions: MenuOption[] = [
  {
    label: renderLabel('Home', '首页'),
    key: 'homepage',
    icon: icons.home,
  },
  {
    label: '系统管理',
    key: 'system-management',
    icon: icons.systemManagement,
    children: [
      {
        label: renderLabel('User', '用户管理'),
        key: 'user-management',
        icon: icons.userManagement,
      },
      {
        label: renderLabel('Role', '角色管理'),
        key: 'role-management',
        icon: icons.roleManagement,
      },
      {
        label: renderLabel('Menu', '菜单管理'),
        key: 'menu-management',
        icon: icons.menuManagement,
      },
    ],
  },
]

function renderLabel(to: string, name: string) {
  return () => h(RouterLink, { to: { name: to } }, { default: () => name })
}
</script>

<template>
  <section class="h-full flex flex-col justify-start">
    <div class="flex items-center justify-center gap-4 p-4">
      <n-image width="30" src="https://www.naiveui.com/assets/naivelogo-BdDVTUmz.svg" class="rounded-4" />
      <n-text type="default" class="text-lg font-medium">
        vue-naive-starter
      </n-text>
    </div>
    <div class="flex-1 overflow-hidden p-2">
      <n-menu
        v-model:value="activeKey"
        bordered
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        class="h-full w-full"
      />
    </div>
  </section>
</template>

<style scoped>

</style>
