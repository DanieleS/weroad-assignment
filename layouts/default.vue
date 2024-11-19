<template>
  <Header :isHomepage />
  <main class="max-w-screen mx-auto p-4"><slot /></main>
</template>

<script setup lang="ts">
usePageTitle();

const { "is-homepage": isHomepage }: any = useAttrs();
</script>
