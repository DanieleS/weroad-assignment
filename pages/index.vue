<template>
  <NuxtLayout name="default" :is-homepage="true">
    <NuxtLink to="/search">Search</NuxtLink>
  </NuxtLayout>
</template>

<script setup lang="ts">
defineComponent({ name: "index" });

definePageMeta({
  layout: "empty",
});
</script>
