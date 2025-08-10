<script setup lang="ts">

</script>

<template>
  <article class="h-screen">
    <n-layout has-sider class="h-full">
      <n-layout-sider bordered width="220">
        <Sider />
      </n-layout-sider>
      <n-layout>
        <n-layout-header bordered>
          <Header />
        </n-layout-header>
        <n-layout-content class="flex-1 overflow-auto">
          <slot />
        </n-layout-content>
        <n-layout-footer
          bordered
          position="absolute"
          style="height: 64px; padding: 24px"
        >
          <Footer />
        </n-layout-footer>
      </n-layout>
    </n-layout>
  </article>
</template>
