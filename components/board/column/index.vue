<script setup lang="ts">
import { useSortable } from "@vueuse/integrations/useSortable";

import type { SortableEvent } from "sortablejs";
import type { Column } from "~/stores/board";

const { column } = defineProps<{ column: Column }>();
const { columns } = storeToRefs(useBoardStore());

function swapTask(event: SortableEvent) {
  const columnFrom = columns.value.find(
    (column) => column.id === Number(event.from.dataset.columnId)
  );
  const columnTo = columns.value.find(
    (column) => column.id === Number(event.to.dataset.columnId)
  );

  const fromIdx = event.oldIndex;
  const toIdx = event.newIndex;

  if (!columnFrom || !columnTo) return;
  if (columnFrom.id == columnTo.id) return;
  if (fromIdx === undefined || toIdx === undefined) return;

  const taskToSwap = columnFrom.tasks.splice(fromIdx, 1)[0];
  taskToSwap.columnId = columnTo.id;
  columnTo.tasks.splice(toIdx, 0, taskToSwap);
}

useSortable(`#tasks-${column.id}`, column.tasks, {
  animation: 200,
  group: "column",
  onEnd: swapTask,
});
</script>

<template>
  <section class="flex-[0_0_350px]">
    <BoardColumnTitle :column="column" />

    <div
      :id="`tasks-${column.id}`"
      :data-column-id="column.id"
      class="space-y-2"
    >
      <BoardColumnTask
        v-for="task in column.tasks"
        :key="task.id"
        :task="task"
      />
    </div>
  </section>
</template>
