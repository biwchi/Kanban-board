<script setup lang="ts">
const modelValue = defineModel<boolean>();
const props = defineProps<{ columnId: number }>();

const boardStore = useBoardStore();

function createTask(title: string, description: string) {
  boardStore.createTask(props.columnId, title, description);
  modelValue.value = false;
}
</script>

<template>
  <AppModal title="Add new task" v-model="modelValue">
    <BaseTaskModal @submit="createTask" />
  </AppModal>
</template>
