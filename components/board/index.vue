<script setup lang="ts">
import { useSortable } from "@vueuse/integrations/useSortable";

const { columns, editingTask, isEditModal } = storeToRefs(useBoardStore());

useSortable("#columns", columns, {
  animation: 200,
  ignore: "#taskEditModal",
});
</script>

<template>
  <div>
    <div id="columns" class="flex py-6 gap-4">
      <BoardColumn
        v-for="column in columns"
        :key="column.id"
        :column="column"
      />
    </div>

    <BoardColumnTaskEdit
      v-if="editingTask"
      v-model="isEditModal"
      :task="editingTask"
    />
  </div>
</template>
