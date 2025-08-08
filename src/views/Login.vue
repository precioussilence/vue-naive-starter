<script setup lang="ts">
import { signin } from '@/services/auth'

const username = ref('')
const password = ref('')
const captcha = ref('')

const message = useMessage()
const loading = ref(false)

async function handleSignin() {
  loading.value = true
  try {
    const response = await signin({
      username: username.value,
      password: password.value,
      captcha: captcha.value,
    })
    localStorage.setItem('token', response.token)
    message.success('登录成功')
  }
  catch (error) {
    message.error('登录失败，请检查用户名和密码')
    console.error('Login failed:', error)
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen w-full flex items-center justify-center from-indigo-100 to-teal-50 bg-gradient-to-br">
    <div class="max-w-sm w-full flex flex-col items-center rounded-xl bg-white px-8 py-10 shadow-lg">
      <h2 class="mb-4 text-2xl text-gray-700 font-bold tracking-wide">
        欢迎登录
      </h2>
      <n-form
        class="w-full flex flex-col gap-1"
        @submit.prevent="handleSignin"
      >
        <n-form-item path="username">
          <n-input
            v-model:value="username"
            placeholder="用户名"
            size="large"
            class="border border-gray-200 rounded px-4 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            autofocus
            clearable
          />
        </n-form-item>
        <n-form-item path="password">
          <n-input
            v-model:value="password"
            type="password"
            placeholder="密码"
            size="large"
            class="border border-gray-200 rounded px-4 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            clearable
          />
        </n-form-item>
        <n-form-item path="captcha">
          <n-input
            v-model:value="captcha"
            placeholder="验证码"
            size="large"
            class="border border-gray-200 rounded px-4 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            clearable
          />
        </n-form-item>
        <n-button
          type="primary"
          size="large"
          class="mt-2 w-full font-semibold"
          :loading="loading"
          attr-type="submit"
        >
          {{ loading ? '登录中...' : '登录' }}
        </n-button>
      </n-form>
    </div>
  </div>
</template>
