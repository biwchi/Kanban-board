<script setup lang="ts">
const modelValue = defineModel<boolean>();
const props = defineProps<{ task: Task }>();

const boardStore = useBoardStore();

function editTask(title: string, description: string) {
  boardStore.editTask(props.task, title, description);
  modelValue.value = false;
}
</script>

<template>
  <AppModal title="Edit task" v-model="modelValue">
    <BaseTaskModal
      :title="task.title"
      :description="task.description"
      @submit="editTask"
    />
  </AppModal>
</template>
