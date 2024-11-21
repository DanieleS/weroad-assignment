<template>
  <div
    class="flex h-screen w-full flex-col items-center justify-center text-center"
  >
    <h1 class="text-3xl">{{ $t("success.title") }}</h1>
    <div class="text-xl italic">
      <i18n-t scope="global" keypath="success.subTitle" as="h2">
        <span class="text-primary-500">{{ $t("success.subTitleAccent") }}</span>
      </i18n-t>
    </div>
    <p class="mt-8">{{ $t("success.message") }}</p>
    <NuxtLink to="/" class="mt-8 text-primary-500 underline">
      {{ $t("success.backHome") }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineComponent({ name: "success" });

definePageMeta({
  layout: "checkout",
});
</script>
