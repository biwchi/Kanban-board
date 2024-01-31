<script setup lang="ts">
defineEmits<{
  submit: [title: string, description: string];
}>();

const props = defineProps<{ title?: string; description?: string }>();

const title = ref(props.title ?? "");
const description = ref(props.description ?? "");
</script>

<template>
  <form
    @submit="$emit('submit', title, description)"
    class="flex flex-col gap-3"
  >
    <AppInput v-model="title" required placeholder="Title" />
    <AppInput v-model="description" required placeholder="Description" />

    <AppButton> Save </AppButton>
  </form>
</template>
