<script setup lang="ts">
const boardStore = useBoardStore();
const columnTitle = ref("");

const addColumn = () => {
  boardStore.createColumn(columnTitle.value);
  columnTitle.value = "";
};
</script>

<template>
  <header class="flex justify-between items-center py-4">
    <h1 class="text-3xl font-bold">Kanban Board</h1>

    <div class="flex gap-2">
      <AppInput v-model="columnTitle" placeholder="Title" />
      <AppButton @click="addColumn"> Add new column </AppButton>
    </div>
  </header>
</template>
