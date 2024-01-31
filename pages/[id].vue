<script setup lang="ts">
const boardStore = useBoardStore();
const route = useRoute();

const id = route.params.id;
const task = boardStore.getTaskById(Number(id));
</script>

<template>
  <div class="my-4">
    <div v-if="task">
      <h1 class="text-3xl font-medium mb-4">{{ task.title }}</h1>
      <p>{{ task.description }}</p>
    </div>

    <div v-else>No task here =(</div>
  </div>
</template>
