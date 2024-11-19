<template>
  <header>
    <div class="mx-auto flex max-w-screen justify-between p-4 py-4">
      <div class="flex items-baseline">
        <NuxtLink to="/">
          <h1 v-if="isHomepage" class="font-logo text-2xl">
            <span class="text-primary-500">Noi</span>Viaggiamo
          </h1>
          <span v-else="isHomepage" class="font-logo text-2xl">
            <span class="text-primary-500">Noi</span>Viaggiamo
          </span>
        </NuxtLink>
        <ul class="ml-16 hidden gap-8 md:flex">
          <li>
            <NuxtLink to="/search">
              <UIcon name="i-fa6-solid-magnifying-glass" />
              Search
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#"> Some Link </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#"> Some other Link </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="hidden gap-4 md:flex">
        <UButton
          to="#"
          variant="outline"
          :ui="{ rounded: 'rounded-full' }"
          color="gray"
          class="min-w-20 justify-center"
        >
          Login
        </UButton>
        <UButton
          to="#"
          :ui="{ rounded: 'rounded-full' }"
          class="min-w-20 justify-center"
        >
          Register</UButton
        >
      </div>
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
