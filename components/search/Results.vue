<template>
  <section>
    <ul>
      <li v-for="result in results" :key="result.id">
        <SearchResult :travel="result" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { Travel } from "~/common/travels";

defineComponent({ name: "Results" });

type Props = {
  results: Travel[];
};

defineProps<Props>();
</script>
