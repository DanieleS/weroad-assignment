<template>
  <section class="rounded-xl border border-gray-300">
    <div class="text-h4 p-4 text-lg font-bold">{{ title }}</div>
    <UDivider class="mx-4 w-[calc(100%_-_2rem)]" />
    <div class="p-4">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineComponent({ name: "CheckoutStep" });

type Props = {
  title: string;
};

defineProps<Props>();
</script>
