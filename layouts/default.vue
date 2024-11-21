<template>
  <div>
    <Header :isHomepage />
    <Main><slot /></Main>
  </div>
</template>

<script setup lang="ts">
usePageTitle();

const { "is-homepage": isHomepage }: any = useAttrs();
</script>
