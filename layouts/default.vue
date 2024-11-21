<template>
  <Header :isHomepage />
  <Main><slot /></Main>
</template>

<script setup lang="ts">
usePageTitle();

const { "is-homepage": isHomepage }: any = useAttrs();
</script>
