<template>
  <nav class="h-full">
    <div
      class="flex h-full flex-col justify-between overflow-auto md:flex-row md:items-center"
    >
      <ul class="flex flex-col gap-4 md:flex-row md:gap-8">
        <li>
          <NuxtLink to="/search">
            <UIcon name="i-fa6-solid-magnifying-glass" />
            {{ $t("header.search") }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#"> {{ $t("header.link1") }} </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#"> {{ $t("header.link2") }} </NuxtLink>
        </li>
      </ul>
      <div class="mt-auto flex w-full justify-around gap-4 md:w-auto">
        <UButton
          to="#"
          variant="outline"
          :ui="{ rounded: 'rounded-full' }"
          color="gray"
          class="min-w-20 justify-center"
        >
          {{ $t("header.login") }}
        </UButton>
        <UButton
          to="#"
          :ui="{ rounded: 'rounded-full' }"
          class="min-w-20 justify-center"
        >
          {{ $t("header.register") }}
        </UButton>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
defineComponent({ name: "MainNav" });
</script>
