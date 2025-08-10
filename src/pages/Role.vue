<script setup lang="ts">
const columns = [
  {
    title: '头像',
    key: 'avatar',
  },
  {
    title: '角色名称',
    key: 'roleName',
  },
  {
    title: '角色编码',
    key: 'roleCode',
  },
  {
    title: '角色描述',
    key: 'description',
  },
  {
    title: '状态',
    key: 'status',
  },
  {
    title: '创建时间',
    key: 'createdTime',
  },
  {
    title: '更新时间',
    key: 'updatedTime',
  },
]
const pagination = reactive({
  page: 1,
  pageSize: 10,
  showSizePicker: true,
  pageSizes: [10, 20, 30],
  onChange: (page: number) => {
    pagination.page = page
  },
  onUpdatePageSize: (pageSize: number) => {
    pagination.pageSize = pageSize
    pagination.page = 1
  },
})
</script>

<template>
  <section class="h-full p-0">
    <n-card title="角色管理" class="h-full">
      <template #header-extra>
        <n-button type="primary">
          新建角色
        </n-button>
      </template>
      <n-data-table :columns="columns" :pagination="pagination" class="h-full" />
    </n-card>
  </section>
</template>
