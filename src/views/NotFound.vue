<script setup lang="ts"></script>

<template>
  <div class="min-h-screen w-full flex flex-col from-slate-50 to-slate-100 bg-gradient-to-br dark:from-slate-900 dark:to-slate-800">
    <!-- 主要内容 -->
    <main class="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
      <!-- 404 数字动画（优化版） -->
      <div class="relative mb-12 max-w-3xl w-full flex items-center justify-center gap-1 md:gap-2">
        <!-- 数字"4"动画：快速左侧滑入 -->
        <span class="animate-fade-in animate-slide-in-left from-blue-500 to-red-600 bg-gradient-to-r bg-clip-text text-[clamp(5rem,20vw,12rem)] text-transparent font-black tracking-tight duration-100 will-change-transform">
          4
        </span>
        <!-- 数字"0"动画：快速缩放 -->
        <span class="animate-fade-in animate-zoom-in from-blue-500 to-red-600 bg-gradient-to-r bg-clip-text text-[clamp(5rem,20vw,12rem)] text-transparent font-black tracking-tight duration-100 will-change-transform">
          0
        </span>
        <!-- 数字"4"动画：快速右侧滑入 -->
        <span class="animate-fade-in animate-slide-in-right from-blue-500 to-red-600 bg-gradient-to-r bg-clip-text text-[clamp(5rem,20vw,12rem)] text-transparent font-black tracking-tight duration-100 will-change-transform">
          4
        </span>

        <!-- 警告图标 -->
        <div class="absolute animate-pulse -right-4 -top-4 md:-right-8">
          <i class="i-carbon-alert-triangle h-10 w-10 text-amber-500 md:h-14 md:w-14" />
        </div>
      </div>

      <!-- 错误信息 -->
      <div class="mx-auto mb-10 max-w-md animate-fade-in animate-slide-in-up duration-100 delay-225 space-y-4">
        <h1 class="text-3xl text-slate-800 font-bold md:text-4xl dark:text-white">
          页面未找到
        </h1>
        <p class="text-lg text-slate-600 dark:text-slate-300">
          抱歉，您请求的页面不存在或已被移动。
        </p>
      </div>

      <!-- 操作按钮 -->
      <div class="max-w-md w-full flex flex-col animate-fade-in animate-slide-in-up gap-4 duration-100 sm:flex-row">
        <n-button
          type="primary"
          size="large"
          class="flex-1 transition-all duration-100 hover:shadow-lg"
          @click="$router.push('/')"
        >
          <i class="i-carbon-home mr-2 h-5 w-5" />
          返回首页
        </n-button>
        <n-button
          type="default"
          size="large"
          class="flex-1 transition-all duration-100 hover:shadow-lg"
          @click="$router.go(-1)"
        >
          <i class="i-carbon-arrow-left mr-2 h-5 w-5" />
          返回上一页
        </n-button>
      </div>
    </main>

    <!-- 页脚 -->
    <footer class="mt-auto border-t border-slate-200 py-6 dark:border-slate-700">
      <div class="container mx-auto px-4 text-center text-sm text-slate-500 dark:text-slate-400">
        &copy; {{ new Date().getFullYear() }} MyApp. 保留所有权利。
      </div>
    </footer>
  </div>
</template>
