<script setup lang="ts">
defineProps<{ column: Column; isEditing: boolean }>();
</script>

<template>
  <h1
    v-if="!isEditing"
    :title="column.title"
    class="text-xl font-medium text-ellipsis overflow-hidden whitespace-nowrap"
  >
    {{ column.title }}
  </h1>
  <AppInput v-else ref="editingInputRef" v-model="column.title" />
</template>
