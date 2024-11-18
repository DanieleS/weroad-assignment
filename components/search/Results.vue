<template>
  <section>
    <ul>
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
