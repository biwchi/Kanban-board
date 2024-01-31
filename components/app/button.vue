<script setup lang="ts">
import type { ButtonHTMLAttributes } from "vue";

interface Props extends /* @vue-ignore */ ButtonHTMLAttributes {
  size?: "sm" | "md" | "lg";
}

withDefaults(defineProps<Props>(), { size: "md" });
defineSlots<{ default: any }>();

const sizes = {
  sm: "px-2 py-1",
  md: "px-3 py-2",
  lg: "px-4 py-3",
};
</script>

<template>
  <button
    :class="[
      'py-2 px-3 bg-blue-500 text-white rounded-full hover:bg-blue-600',
      sizes[size],
    ]"
  >
    <slot />
  </button>
</template>
