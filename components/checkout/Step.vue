<template>
  <section
    class="rounded-xl border border-gray-300"
    :class="{
      'shadow-md': isActive,
    }"
  >
    <div class="flex items-center justify-between p-4">
      <h2 class="title text-h4 text-lg font-bold">{{ title }}</h2>
      <UButton
        v-if="!isActive && hasData"
        size="xs"
        variant="ghost"
        @click="$emit('step:edit')"
      >
        {{ $t("common.button.edit") }}
      </UButton>
    </div>
    <UDivider class="mx-4 w-[calc(100%_-_2rem)]" v-if="isActive" />
    <div class="p-4" v-if="isActive">
      <slot />
    </div>
    <template v-else-if="hasData && $slots.summary">
      <UDivider />
      <div class="p-4 text-gray-500">
        <slot name="summary" />
      </div>
    </template>
  </section>
</template>

<script setup lang="ts" generic="T">
defineComponent({ name: "CheckoutStep" });

type Props = {
  title: string;
  isActive: boolean;
  hasData?: boolean;
};

defineProps<Props>();

type Emits = {
  "step:edit": [];
};

defineEmits<Emits>();
</script>

<style scoped>
.title::before {
  counter-increment: checkout-step;
  content: counter(checkout-step) ". ";
}
</style>
