<template>
  <div>
    <SearchForm navigation="replace" />
    <SearchResults
      :results="searchResult.data.value!.items"
      :class="{
        'opacity-50': searchResult.status.value === 'pending',
      }"
    />
  </div>
</template>

<script setup lang="ts">
defineComponent({ name: "index" });

const searchResult = await useSearch();
</script>
