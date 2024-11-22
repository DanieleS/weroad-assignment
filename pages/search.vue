<template>
  <div>
    <SearchForm navigation="replace" />
    <FetchResult :result="searchResult" #="{ data, isPending }">
      <SearchResults
        :results="data.items"
        :class="{
          'opacity-50': isPending,
        }"
      />
    </FetchResult>
  </div>
</template>

<script setup lang="ts">
defineComponent({ name: "search" });

usePageTitle("Search");

const searchResult = await useSearch();
</script>
