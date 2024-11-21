<template>
  <header>
    <div class="container mx-auto flex items-baseline justify-between p-4 py-4">
      <NuxtLink to="/">
        <h1 v-if="isHomepage" class="font-logo text-2xl">
          <span class="text-primary-500">Noi</span>Viaggiamo
        </h1>
        <span v-else="isHomepage" class="font-logo text-2xl">
          <span class="text-primary-500">Noi</span>Viaggiamo
        </span>
      </NuxtLink>
      <MainMenu />
    </div>
  </header>
</template>

<script setup lang="ts">
defineComponent({ name: "Header" });

type Props = {
  isHomepage?: boolean;
};

defineProps<Props>();
</script>
