<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { columns } from '@/utils/tableColumns/tasksColumns'
import { tasksWithProjectsQuery } from '@/utils/supaQueries'
import type { TasksWithProjects } from '@/utils/supaQueries'

usePageStore().pageData.title = 'My Tasks'

const tasks = ref<TasksWithProjects | null>(null)
const getTasks = async () => {
  const { data, error, status } = await tasksWithProjectsQuery

  if (error) useErrorStore().setError({ error, customCode: status })

  tasks.value = data
}

await getTasks()

useErrorStore().setError({ error: Error('I am an uncaught error') })
</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>
