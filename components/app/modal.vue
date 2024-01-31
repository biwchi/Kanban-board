<script setup lang="ts">
defineProps<{ title: string }>();

const modelValue = defineModel<boolean>();
const modalBodyRef = ref<HTMLDivElement | null>(null);

onClickOutside(modalBodyRef, () => (modelValue.value = false));
</script>

<template>
  <div
    v-if="modelValue"
    class="h-screen w-screen fixed top-0 left-0 flex items-center justify-center"
  >
    <div ref="modalBodyRef" class="z-10 bg-white min-w-96 p-5 rounded-xl">
      <div class="flex justify-between mb-4">
        <h1 class="text-xl font-medium">{{ title }}</h1>
        <AppButton @click="modelValue = false"> X </AppButton>
      </div>
      <slot />
    </div>

    <div class="w-full h-full absolute left-0 right-0 bg-black/30"></div>
  </div>
</template>
