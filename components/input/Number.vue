<template>
  <div class="flex items-center">
    <UButton
      class="flex aspect-square w-8 items-center justify-center"
      :ui="{ rounded: 'rounded-full' }"
      :disabled="model === min"
      @click="model = clamp(model - 1)"
    >
      -
    </UButton>
    <UInput
      :name="$attrs.name as string"
      class="w-12"
      v-model="model"
      readonly
      variant="none"
      input-class="text-center"
    />
    <UButton
      class="flex aspect-square w-8 items-center justify-center"
      :ui="{ rounded: 'rounded-full' }"
      :disabled="model === max"
      @click="model = clamp(model + 1)"
    >
      +
    </UButton>
  </div>
</template>

<script setup lang="ts">
defineComponent({ name: "Number" });

type Props = {
  min?: number;
  max?: number;
};

const props = defineProps<Props>();

const model = defineModel<number>({
  default: 0,
});

const clamp = (value: number) => {
  if (props.min !== undefined) {
    value = Math.max(value, props.min);
  }
  if (props.max !== undefined) {
    value = Math.min(value, props.max);
  }
  return value;
};
</script>
