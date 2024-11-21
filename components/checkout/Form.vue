<template>
  <UForm :schema :state @submit="$emit('submit', $event.data)">
    <slot />
    <div class="mt-8 flex justify-end">
      <UButton type="submit">
        {{ nextLabel ?? $t("common.button.next") }}
      </UButton>
    </div>
  </UForm>
</template>

<script setup lang="ts" generic="T extends Record<string, any>">
import type { z, ZodTypeDef } from "zod";

defineComponent({ name: "Form" });

const state = defineModel<Record<string, any>>({
  required: true,
});

type Props = {
  nextLabel?: string;
  schema: z.Schema<T, ZodTypeDef, unknown>;
};

defineProps<Props>();

type Emits = {
  submit: [state: T];
};

defineEmits<Emits>();
</script>
