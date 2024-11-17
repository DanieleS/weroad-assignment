<template>
  <CheckoutStep title="Travelers">
    <UForm :state @submit="onSubmit">
      <div>How many travelers are you booking for?</div>
      <InputNumber v-model="state.travelers" :min="1" />
      <UButton type="submit">Next</UButton>
    </UForm>
  </CheckoutStep>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import type { TravelersStep } from "~/common/checkout";

defineComponent({ name: "Travelers" });

type Emits = {
  "step:complete": [state: { travelers: number }];
};

const emit = defineEmits<Emits>();

const state = reactive<TravelersStep>({
  travelers: 1,
});

const onSubmit = (event: FormSubmitEvent<TravelersStep>) => {
  emit("step:complete", event.data);
};
</script>
