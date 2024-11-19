<template>
  <section>
    <ul class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="(result, idx) in results" :key="result.id">
        <SearchResult :travel="result" :data-testid="`search-result-${idx}`" />
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
