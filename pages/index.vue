<template>
  <div>
    <Header is-homepage />
    <HomeSearchSection />
    <Main> <HomeContent class="mt-16" /> </Main>
  </div>
</template>

<script setup lang="ts">
defineComponent({ name: "index" });

definePageMeta({
  layout: "empty",
});

usePageTitle();
</script>
