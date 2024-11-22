<template>
  <div v-html="html" />
</template>

<script setup lang="ts">
import { marked } from "marked";
defineComponent({ name: "Markdown" });

type Props = {
  content: string;
};

const props = defineProps<Props>();

const html = computed(() => marked(props.content));
</script>

<style scoped>
:deep(h2) {
  @apply text-2xl font-bold;
}

:deep(ul) {
  @apply my-4 list-inside list-disc;
}

:deep(ul ul) {
  @apply ms-4 list-[circle];
}

:deep(hr) {
  @apply my-8;
}

:deep(p) {
  @apply my-4;
}
</style>
