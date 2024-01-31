<script setup lang="ts">
defineProps<{ column: Column }>();

const boardStore = useBoardStore();

const editingInputRef = ref<HTMLInputElement | null>(null);
const saveButton = ref<HTMLDivElement | null>(null);

const isEditing = ref(false);
const isCreateModal = ref(false);

onClickOutside(editingInputRef, () => (isEditing.value = false), {
  ignore: [saveButton],
});
</script>

<template>
  <div class="flex mb-2 justify-between items-center">
    <BoardColumnTitleInput :column="column" :is-editing="isEditing" />

    <div class="flex gap-2">
      <AppButton @click="isCreateModal = true"> + </AppButton>
      <AppButton ref="saveButton" @click="isEditing = !isEditing" size="sm">
        {{ isEditing ? "✍️" : "⚙️" }}
      </AppButton>
      <AppButton @click="boardStore.deleteColumn(column.id)" size="sm">
        🗑️
      </AppButton>
    </div>

    <BoardColumnCreateTaskModal
      :column-id="column.id"
      v-model="isCreateModal"
    />
  </div>
</template>
