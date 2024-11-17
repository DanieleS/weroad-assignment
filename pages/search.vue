<template>
  <div>
    <SearchForm navigation="replace" />
    <FetchResult :result="searchResult" #="{ data, status }">
      <SearchResults
        :results="data.items"
        :class="{
          'opacity-50': status === 'pending',
        }"
      />
    </FetchResult>
  </div>
</template>

<script setup lang="ts">
defineComponent({ name: "index" });

usePageTitle("Search");

const searchResult = await useSearch();
</script>
