<script setup lang="ts">
import type { Task } from "~/stores/board";

defineProps<{ task: Task }>();

const boardStore = useBoardStore();
const { editingTask, isEditModal } = storeToRefs(boardStore);

function openEditModal(task: Task) {
  editingTask.value = task;
  isEditModal.value = true;
}
</script>

<template>
  <div>
    <NuxtLink :to="`/${task.id}`">
      <div class="p-2 text-white rounded-xl cursor-pointer bg-blue-500">
        <div class="flex justify-between items-center">
          <h2 class="mb-2 font-medium">{{ task.title }}</h2>

          <div>
            <AppButton @click.prevent="openEditModal(task)"> ⚙️ </AppButton>
            <AppButton @click.prevent="boardStore.deleteTask(task)">
              🗑️
            </AppButton>
          </div>
        </div>

        <p class="text-sm">{{ task.description }}</p>
      </div>
    </NuxtLink>
  </div>
</template>
