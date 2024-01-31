<script setup lang="ts">
import type { InputHTMLAttributes } from "vue";

interface Props extends /* @vue-ignore */ InputHTMLAttributes {}

defineProps<Props>();
const modelValue = defineModel<string>();
</script>

<template>
  <input
    v-model="modelValue"
    type="text"
    class="border p-2 rounded-full focus:ring ring-blue-500 outline-none"
  />
</template>
