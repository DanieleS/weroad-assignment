<template>
  <section class="rounded-xl border border-gray-300">
    <div class="title text-h4 p-4 text-lg font-bold">{{ title }}</div>
    <UDivider class="mx-4 w-[calc(100%_-_2rem)]" v-if="isActive" />
    <div class="p-4" v-if="isActive">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineComponent({ name: "CheckoutStep" });

type Props = {
  title: string;
  isActive: boolean;
};

defineProps<Props>();
</script>

<style scoped>
.title::before {
  counter-increment: checkout-step;
  content: counter(checkout-step) ". ";
}
</style>
