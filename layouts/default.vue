<template>
  <Header :isHomepage />
  <main><slot /></main>
</template>

<script setup lang="ts">
usePageTitle();

const { "is-homepage": isHomepage }: any = useAttrs();
</script>
