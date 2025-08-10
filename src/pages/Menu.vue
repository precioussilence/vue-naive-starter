<script setup lang="ts">
const columns = [
  {
    title: '菜单名称',
    key: 'resourceName',
  },
  {
    title: '菜单编码',
    key: 'resourceCode',
  },
  {
    title: '菜单类型',
    key: 'resourceType',
  },
  {
    title: '父级菜单',
    key: 'parentId',
  },
  {
    title: '菜单路径',
    key: 'path',
  },
  {
    title: '菜单图标',
    key: 'icon',
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
    <n-card title="菜单管理" class="h-full">
      <template #header-extra>
        <n-button type="primary">
          新建菜单
        </n-button>
      </template>
      <n-data-table :columns="columns" :pagination="pagination" class="h-full" />
    </n-card>
  </section>
</template>
