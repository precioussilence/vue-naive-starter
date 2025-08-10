<script setup lang="ts">

</script>

<template>
  <article class="h-screen">
    <n-layout has-sider class="h-full">
      <n-layout-sider bordered width="220">
        <Sider />
      </n-layout-sider>
      <n-layout>
        <n-flex vertical class="h-full">
          <n-layout-header bordered class="shrink-0" style="height: 64px; padding: 0 24px">
            <Header />
          </n-layout-header>
          <n-layout-content class="flex-1" content-style="padding: 0 12px; overflow: auto">
            <slot />
          </n-layout-content>
          <n-layout-footer bordered class="shrink-0" style="height: 64px; padding: 0 24px">
            <Footer />
          </n-layout-footer>
        </n-flex>
      </n-layout>
    </n-layout>
  </article>
</template>
