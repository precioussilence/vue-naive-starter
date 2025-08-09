<script setup lang="ts">
import { signup } from '@/services/auth'

const username = ref('')
const password = ref('')
const confirmPassword = ref('')
const loading = ref(false)
const message = useMessage()
const router = useRouter()

async function handleRegister() {
  if (!username.value || !password.value || !confirmPassword.value) {
    message.warning('请填写所有字段')
    return
  }
  if (password.value !== confirmPassword.value) {
    message.error('两次输入的密码不一致')
    return
  }
  loading.value = true
  try {
    await signup({ username: username.value, password: password.value })
    message.success('注册成功')
    router.push('/login')
  }
  catch (error) {
    message.error('注册失败，请重试')
    console.error('Register failed:', error)
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
        注册账号
      </h2>
      <n-form class="w-full flex flex-col gap-1" @submit.prevent="handleRegister">
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
        <n-form-item path="confirmPassword">
          <n-input
            v-model:value="confirmPassword"
            type="password"
            placeholder="确认密码"
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
          {{ loading ? '注册中...' : '注册' }}
        </n-button>
      </n-form>
    </div>
  </div>
</template>
